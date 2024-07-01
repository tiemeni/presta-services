import { Box, Button, Divider, Grid, } from "@mui/material"
import React, { useState } from "react";
import { motion } from "framer-motion";


const appNavData = [
    {
        navLink: {
            text: 'Salesforce',
            to: '#Salesforce'
        },
        menuItems: [
            {
                text: 'Sales Cloud ',
                to: '#Sales-Cloud'
            },
            {
                text: 'Service Cloud',
                to: '#sub-2'
            },
            {
                text: 'Data Integration',
                to: '#sub-3'
            },
        ]
    },
    {
        navLink: {
            text: 'Services',
            to: '#2'
        },
        menuItems: [
            {
                text: 'Strategies',
                to: '#sub-1'
            },
            {
                text: 'Integrations',
                to: '#sub-2'
            },
            {
                text: 'Gestion du changement',
                to: '#sub-3'
            },
        ]
    },
]

export function AppBarFullNavLink({ navLink = {}, id, menuItems = [] }) {
    const [showMenu, setShowMenu] = useState(false)
    const [displayMenu, setDisplayMenu] = useState(false)
    const [timerId, setTimerId] = useState(null)


    return (
        <div

            onMouseOver={() => {
                clearTimeout(timerId)
                setDisplayMenu(true)
                setShowMenu(true)
            }}
            onMouseLeave={() => {
                setShowMenu(false)
                setTimerId(setTimeout(setDisplayMenu, 400, false))
            }}
            className='nav-link-btn'>
            <AppBarNavLink
                id={id} to={navLink.to.replace(' ', '')}>
                {navLink.text}
            </AppBarNavLink>

            <AppBarNavLinkMenu
                show={showMenu}
                display={displayMenu}
                items={menuItems} anchorid={id} />

        </div>

    )
}

const menuVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 35 }
}

export function AppBarNavLinkMenu({ items = [], show = false, display, anchorid, }) {

    if (!display) {
        return null
    }
    return (
        <motion.div
            variants={menuVariants}
            animate={show ? 'visible' : 'hidden'}
            transition={{
                ease: "linear",
                duration: 0.3,
                x: { duration: 1 }
            }}
            className={`nav-link-menu`}
            id={anchorid}
            aria-labelledby={anchorid} >
            {items.map((menuItem, index) => (<AppBarNavMenuItem index={(index === 0 && 'first') || (index === items.length - 1 && 'last') || 'none'} to={menuItem.to} text={menuItem.text} />))}

        </motion.div>
    )

}

export function AppBarNavLink({ to = '', id = 2, children }) {
    return (
        <div className='app-bar-nav-link'>
            <a href={to.replace(' ', '')} id={id} style={{fontSize: 18}} >
                {children}
                <span className='app-bar-nav-link-chevron-down' />

            </a>
        </div>

    )
}

export function AppBarNavMenuItem({ text = '', to = '', index = 'none' }) {
    let className = 'app-bar-nav-menu-link '
    if (index === 'first') {
        className = `${className} first`
    } else if (index === 'last') {
        className = `${className} last`
    } else {
        className = 'app-bar-nav-menu-link'
    }
    return (
        <a className={className} href={to.replace(' ', '')} style={{ display: 'inline-block' }}>
            {text}
        </a>
    )
}


export const Header = () => {
    return (
        <>
            <Grid mt={0} container spacing={2} height={90} backgroundColor="white" color={"black"} position={"fixed"} zIndex={999}>
                <Grid {...style} item xs={6} md={5} fontSize={17} padding={10}>
                    <Box>
                    <img src={"/logo.png"} alt="logo" style={{objectFit:'cover', height:'50px'}}  />
                    </Box>
                    <nav className='app-bar-nav'>
                        {appNavData.map((navItem, index) => (<AppBarFullNavLink id={`navlink${index}`} navLink={navItem.navLink} menuItems={navItem.menuItems} />))}

                    </nav>
                </Grid>
                <Grid {...{ ...style, justifyContent: "flex-end", }} item xs={6} md={7} padding={10}>
                    <Box><Button style={{ backgroundColor: "#4880fe", background: 'linear-gradient(to right, #4880fe, #0f49cf)', height: 50, borderRadius: 15 }} variant="contained">Nous contacter</Button></Box>
                </Grid>
            </Grid>
            <Box sx={{
                backgroundImage: "url(/immeuble.jpg)",
                backgroundSize: 'cover',
                // filter: "blur(1px)",
                resize: "auto",
                backgroundRepeat: 'no-repeat',
                width: "100%",
                height: 800,
            }}>
                <Box height={"100%"} width={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Box width={"60%"}>
                        <Box textAlign={"center"} color={"white"} fontSize={80} sx={{
                            fontWeight: 100,
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                        }}>
                            Partenaire Salesforce de votre transformation digitale.
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box width={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} mb={15}>
                <Box display={"flex"} flexDirection={"row"} width={"90%"} mt={10}>
                    <Box width={"50%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Box width={"80%"}>
                            <h1 style={{ fontSize: 40, fontFamily: 'Roboto', fontWeight: 100 }}>
                                Partenaire Salesforce de niveau Summit
                            </h1>
                            <br/>
                            <p style={{ fontSize: 20, color: "#656c73" }}>
                            Nous sommes experts en solutions Salesforce, dédiés à aider les entreprises à maximiser leur efficacité et à atteindre leurs objectifs commerciaux. Découvrez comment nous pouvons transformer votre organisation avec nos services de pointe
                            </p>
                            <br />
                            <p style={{ fontSize: 20, color: "#656c73" }}>
                                Nous offrons la gamme complète des services nécessaires à votre transformation numérique, incluant:
                            </p>
                            <ol style={{ fontSize: 20, color: "#656c73" }}>
                                <li style={{ marginBottom: 10 }}>Consultation et stratégie Salesforce</li>
                                <li style={{ marginBottom: 10 }}>Planification et stratégie de mise en œuvre.</li>
                                <li style={{ marginBottom: 10 }}>Intégration de Salesforce avec vos systèmes existants.</li>
                                <li style={{ marginBottom: 10 }}>Synchronisation des données pour une efficacité maximale.</li>
                                <li style={{ marginBottom: 10 }}>Analyse des performances et recommandations d'amélioration.</li>
                                <li style={{ marginBottom: 10 }}>Sessions de formation pour vos équipes.</li>
                            </ol>
                            <Button style={{ height: 50, padding: 25, marginTop: 20, fontSize: 17, background: 'linear-gradient(to right, #4880fe, #4880fe)', backgroundColor: "#4880fe", borderRadius: 20 }} variant="contained">PLUS D'INFORMATIONS</Button>
                        </Box>
                    </Box>
                    <Box width={"50%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                        <img src="/ampoule.jpg" style={{ borderRadius: 15 }} height={300} width={300} alt="" />
                    </Box>
                </Box>
            </Box>
            <Divider style={{ width: "100%", }} />
            <Box mt={15} mb={15} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <h2 style={{ fontSize: 20, color: "#656c73", fontWeight: 700, fontFamily: 'Roboto' }}>Bénéficiez de notre expérience</h2>
                <h1 style={{ fontSize: 50, fontFamily: 'Roboto', fontWeight: 100 }}>Nos services</h1>
                <p style={{ textAlign: "center", fontSize: 25, width: "70%", color: "#656c73", fontWeight: 100, fontFamily: 'Roboto' }}>
                    Nos équipes de consultants, analystes d’affaires, analystes fonctionnels, scrum masters, développeurs, spécialistes QA et architectes comptent des milliers de projets à leur actif. Profitez de leur expérience d’affaires et de leur expertise technique pour accélérer votre entreprise.
                </p>
                <Box mt={15} display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
                    {["Analyse", "Strategie", "Projets"].map(e => {
                        return (
                            <Box className="box-service" display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} borderRadius={15} height={250} width={350} mr={2} sx={{ fontWeight: 100, fontFamily: 'Roboto', cursor: "pointer", backgroundColor: "#4880fe", color: "white", fontSize: 40 }}>{e}</Box>
                        )
                    })}
                </Box>
                <Box mt={5} display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
                    {["Integration", "Formation", "Support"].map(e => {
                        return (
                            <Box className="box-service" display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} borderRadius={15} height={250} width={350} mr={2} sx={{ fontWeight: 100, fontFamily: 'Roboto', cursor: "pointer", backgroundColor: "#4880fe", color: "white", fontSize: 40 }}>{e}</Box>
                        )
                    })}
                </Box>
            </Box>
            <Divider style={{ width: "100%", }} />
            <Box width={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} mb={20}>
                <Box display={"flex"} flexDirection={"row"} width={"90%"} mt={15} alignItems={"center"}>
                    <Box width={"50%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Box width={"80%"}>
                            <h1 style={{ fontSize: 50, fontFamily: 'Roboto', fontWeight: 100 }}>
                                Notre expertise Salesforce
                            </h1>
                            <p style={{ color: "#656c73", fontSize: 25, fontWeight: 100, fontFamily: 'Roboto' }}>
                                Nous sommes experts sur l’ensemble de la plateforme Salesforce. Nos équipes d’experts certifiés sont à votre disposition pour tous vos projets d’implémentation et d’améliorations, sur tous les Clouds Salesforce
                            </p>
                        </Box>
                    </Box>
                    <Box width={"50%"} alignContent={"flex-start"} gap={2} display={"flex"} flexDirection={"row"} justifyContent={"center"} flexWrap={"wrap"} alignItems={"center"}>
                        {["Sales Cloud", "Service Cloud", "Experience Cloud", "CPQ", "Account Engagement", "Marketing Cloud", "Commerce Cloud"].map(e => {
                            return (
                                <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} borderRadius={15} height={20} width={"auto"} mr={1} sx={{ fontWeight: 100, fontFamily: 'Roboto', cursor: "pointer", backgroundColor: "white", border: " 1px solid #4880fe", color: "#4880fe", fontSize: 20, padding: 2 }}>{e}</Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
            <Box height={500} width={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignContent={"center"}>
                <Box padding={5} sx={{ backgroundColor: "#4880fe", background: 'linear-gradient(to top, #7095eb, #2a60de)' }} borderRadius={5} height={"100%"} width={"100%"}>
                    <h1 style={{ fontSize: 35, color: "white" }}>Accelerez votre Amelioration continue</h1>
                    <h1 style={{ fontSize: 80, color: "white", fontWeight: 400, fontFamily: 'Roboto' }}>Votre prochain projet avec nous</h1>
                    <Button style={{ height: 70, padding: 25, marginTop: 100, fontSize: 17, color: "#4880fe", backgroundColor: "white", borderRadius: 20 }} variant="contained">Contactez-nous</Button>
                </Box>
            </Box>
        </>
    )
}

const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
}