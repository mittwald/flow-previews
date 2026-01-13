import{j as r}from"./iframe-D5OSMSYj.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-aBoV8v8e.js";import{L as m}from"./Link-D6eMXHDa.js";import{H as s}from"./HeaderNavigation-Bfv8-U8M.js";import{B as o}from"./Button-DTe5su69.js";import{T as p}from"./Text-DAhCT_ah.js";import{I as h}from"./Image-BpMsLaPl.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BMdfWeYc.js";import{C as M,M as c}from"./ContextMenu-Dd0hg_nr.js";import{C as I}from"./ContextMenuTrigger-DTFnJa2T.js";import"./ContextMenuSection-DdCYek15.js";import{a as T,M as k}from"./Modal-C2SGBwV3.js";import{H}from"./Heading-CnkvXclq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./index-Bwk6EGM5.js";import"./remote-DoBIDVY0.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./context-CCC3vGzE.js";import"./utils-B2fStg81.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-Db_mMnan.js";import"./useFocus-C6h-AdFL.js";import"./useFocusRing-D5zyjxEp.js";import"./useFocusable-BBmYajA6.js";import"./dynamic-B1x5IqP1.js";import"./LoadingSpinner-BD9yQcJP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CTfGmXCg.js";import"./ProgressBar-Dg6iR4wK.js";import"./Label-Bh0iBwH8.js";import"./Hidden-NmD_pG7l.js";import"./useLabel-CQkx52KA.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CPg_spJX.js";import"./EmulatedBoldText-Dm6vKeJS.js";import"./Text-DxpiEtGq.js";import"./AlertIcon-CDVTToII.js";import"./Switch-Z3PdLKN7.js";import"./useFieldComponent-yQbkUBpw.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BcCDWQTz.js";import"./useFormReset-C4H0cf_a.js";import"./useControlledState-BLX_f1Wx.js";import"./VisuallyHidden-arLJjMse.js";import"./Dialog-DOlt_k3K.js";import"./RSPContexts-BzWalm_3.js";import"./OverlayArrow-Ck8v0z1s.js";import"./Collection-DJCIfP6r.js";import"./CollectionBuilder-b-gCN1Vs.js";import"./SelectionIndicator-BCMQtvaW.js";import"./Separator-BUClO3qk.js";import"./SelectionManager-flPals8o.js";import"./useEvent-Bc0Gn0fF.js";import"./useCollator-BW95ADKZ.js";import"./FocusScope-fzjvqtWs.js";import"./Action-7Qb19ota.js";import"./context-g3auhbgQ.js";import"./useStatic-Ct4NfCBd.js";import"./getActionGroupSlot-BAkzknoy.js";import"./Popover-ToxN3N_z.js";import"./useOverlayController-Dbdtg8pO.js";import"./OverlayContextProvider-DZuBuoMh.js";import"./OverlayTrigger-DrBj6jwS.js";import"./DialogTriggerView-D73yyfww.js";import"./Overlay-BwRuE40u.js";import"./ButtonView-BHglFPrX.js";import"./Flex-nnFZCR02.js";import"./Heading-BpBqAeXs.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,zr as __namedExportsOrder,wr as default};
