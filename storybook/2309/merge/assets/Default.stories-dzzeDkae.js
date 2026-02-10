import{j as r}from"./iframe--WfF81Kk.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BCj0akvL.js";import{L as m}from"./Link-BV1-dthy.js";import{H as s}from"./HeaderNavigation-Chfp3IwZ.js";import{B as o}from"./Button-Csb2zbZD.js";import{T as p}from"./Text-BQUBTPZI.js";import{I as h}from"./Image-7jDKvzoq.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BehruE7U.js";import{C as M,M as c}from"./MenuItem-Ciujc6nw.js";import{C as I}from"./ContextMenuTrigger-C5teqR94.js";import"./ContextMenuSection-BxJIjSzE.js";import{a as T,M as k}from"./Modal-DrgsHzo_.js";import{H}from"./Heading-CQM1gGXf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-zBGCvlSH.js";import"./index-CYxiP9KI.js";import"./index-C06vQZsJ.js";import"./remote-BYVMC2eP.js";import"./useLocalizedStringFormatter-BAqqywtA.js";import"./context-BGH-DtkU.js";import"./utils-DjCd38Rb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BstfIGzX.js";import"./usePress-CuA8A2Wl.js";import"./useFocusRing-xiCVrDfg.js";import"./useFocusable-CYWdX1lX.js";import"./dynamic-3udm1Ueo.js";import"./LoadingSpinner-BoJLilDa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-cdObnXIw.js";import"./ProgressBar-CcHuDHhg.js";import"./Label-B681fyVu.js";import"./Hidden-CjN9RU7M.js";import"./useLabel-C-b3rJJe.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DaXQhhrD.js";import"./EmulatedBoldText-Bc2SrKM1.js";import"./Text-2H1diUJp.js";import"./AlertIcon-Bc0kQsAW.js";import"./Action-B7MToOoF.js";import"./context-BQE_egpR.js";import"./useStatic-DJuRNbYT.js";import"./getActionGroupSlot-DP_ddCf6.js";import"./Popover-B5ewr3nw.js";import"./useOverlayController-CPgvQG2b.js";import"./OverlayContextProvider-HfoRPLvl.js";import"./Dialog-C_VjyLol.js";import"./RSPContexts-D6CGk5en.js";import"./OverlayArrow-zU7WmGPw.js";import"./useControlledState-33z9BU53.js";import"./Collection-WxHe4g5S.js";import"./CollectionBuilder-D8350JFC.js";import"./SelectionIndicator-BGWzSObI.js";import"./Separator-C9zEzG3T.js";import"./SelectionManager-D0POi5wt.js";import"./useEvent-CGxaeV4J.js";import"./useCollator-lImoFu1C.js";import"./FocusScope-D57rWz_c.js";import"./VisuallyHidden-BWpEL0hX.js";import"./Switch-BKX9jQq5.js";import"./useFieldComponent-DtaSYFu8.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D1UzoBwi.js";import"./useFormReset-B7XwhHp1.js";import"./OverlayTrigger-CvMg_PBm.js";import"./DialogTriggerView-B8KWvV0v.js";import"./Overlay-DeHoi3Dz.js";import"./ButtonView-DWC1hYKd.js";import"./Flex-BzEZCsOD.js";import"./Heading-DpPfmaJp.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,qr as default};
