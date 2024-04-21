import { Box, Button, Divider, Grid, } from "@mui/material"
import React from "react";


export const Header = () => {
    return (
        <>
            <Grid mt={0} container spacing={2} height={90} backgroundColor="white" color={"black"} position={"fixed"} zIndex={999}>
                <Grid {...style} item xs={6} md={7} fontSize={17} padding={10}>
                    <Box>
                        <img src="/logo192.png" height={50} width={50} alt="" />
                    </Box>
                    <Box>Nos solutions</Box>
                    <Box>Découvrir Déessi</Box>
                    <Box>Cas clients</Box>
                    <Box>Carrières</Box>
                    <Box>Blog</Box>

                </Grid>
                <Grid {...{ ...style, justifyContent: "flex-end", }} item xs={6} md={5} padding={10}>
                    <Box><Button style={{ backgroundColor: "#4880fe", background: 'linear-gradient(to right, #4880fe, #0f49cf)', height: 50, borderRadius: 15 }} variant="contained">Nous contacter</Button></Box>
                </Grid>
            </Grid>
            <Box sx={{
                backgroundImage: "url(/1_8ZVFLvcbXgLXjdDvNdpgCQ.png)",
                backgroundSize: 'cover',
                // filter: "blur(1px)",
                resize: "auto",
                backgroundRepeat: 'no-repeat',
                width: "100%",
                height: 700,
            }}>
                <Box height={"100%"} width={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Box width={"60%"}>
                        <Box textAlign={"center"} color={"white"} fontSize={80} sx={{
                            fontWeight: 100,
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                        }}>
                            Partenaire Salesforce de votre transformation digitale.
                        </Box>
                        <Box mt={10} textAlign={"center"}>
                            <Button style={{ height: 60, fontSize: 20, backgroundColor: "#4880fe", borderRadius: 20, padding: 30 }} variant="contained">PLUS D'INFORMATIONS</Button>
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
                            <p style={{ fontSize: 20, color: "#656c73" }}>
                                SOLJIT est Partenaire Salesforce depuis 2013. Au fil des années, des projets et des clients satisfaits, nous avons atteint le plus haut niveau de partenaire: Summit.
                            </p>
                            <br />
                            <p style={{ fontSize: 20, color: "#656c73" }}>
                                Nous offrons la gamme complète des services nécessaires à votre transformation numérique, incluant:
                            </p>
                            <ol style={{ fontSize: 20, color: "#656c73" }}>
                                <li style={{marginBottom: 10}}>Stratégie et roadmap technologique</li>
                                <li style={{marginBottom: 10}}>Projets d’implémentation</li>
                                <li style={{marginBottom: 10}}>Intégrations</li>
                                <li style={{marginBottom: 10}}>Services gérés</li>
                                <li style={{marginBottom: 10}}>Gestion du changement</li>
                            </ol>
                            <Button style={{ height: 50, padding: 25, marginTop: 20, fontSize: 17, background: 'linear-gradient(to right, #4880fe, #4880fe)', backgroundColor: "#4880fe", borderRadius: 20 }} variant="contained">PLUS D'INFORMATIONS</Button>
                        </Box>
                    </Box>
                    <Box width={"50%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                        <img src="/1080x940_salesforcepartner_squarefullonpaleblue.jpg.webp" style={{ borderRadius: 15, transform: " rotate(20deg)" }} height={300} width={300} alt="" />
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
                    {["Strategie", "Projets", "Integration"].map(e => {
                        return (
                            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} borderRadius={15} height={250} width={400} mr={2} sx={{ fontWeight: 100, fontFamily: 'Roboto', cursor: "pointer", backgroundColor: "#4880fe", color: "white", fontSize: 40 }}>{e}</Box>
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
                <Box padding={5} sx={{backgroundColor: "#4880fe", background: 'linear-gradient(to top, #7095eb, #2a60de)'}} borderRadius={10} height={"100%"} width={"98%"}>
                    <h1 style={{fontSize: 35, color: "white"}}>Accelerez votre Amelioration continue</h1>
                    <h1 style={{fontSize: 80, color: "white",  fontWeight: 400, fontFamily: 'Roboto'}}>Votre prochain projet avec nous</h1>
                    <Button style={{ height: 70, padding: 25, marginTop: 100, fontSize: 17, color:"#4880fe", backgroundColor: "white", borderRadius: 20 }} variant="contained">Contactez-nous</Button>
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