import{j as r}from"./iframe-BEQP9uXD.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-BArZWwdB.js";import{L as m}from"./Link-xt6yF4pl.js";import{H as s}from"./HeaderNavigation-bUfxkXqz.js";import{B as o}from"./Button-C9UvHdV0.js";import{T as p}from"./Text-BQmA_ZwI.js";import{I as h}from"./Image-Dv7sJsGy.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CUar7AxW.js";import{C as M,M as c}from"./ContextMenu-DiVNx1Oz.js";import{C as I}from"./ContextMenuTrigger-DOg9nCJg.js";import"./ContextMenuSection-Xp9S-BLD.js";import{a as T,M as k}from"./Modal-Cw9Mz12Y.js";import{H}from"./Heading-Cy1GdqFq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-84Jhttbw.js";import"./index-CA9bKJEG.js";import"./index-COHhcPte.js";import"./remote-Ba3iobwA.js";import"./useLocalizedStringFormatter-CVsWWxAE.js";import"./context-DjvYmnOm.js";import"./utils-CvsvUfaH.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BjEuYOvC.js";import"./useFocus-DENBDZ81.js";import"./useFocusRing-QizZnVOy.js";import"./useFocusable-WQftMZYd.js";import"./dynamic-BAr_-wMD.js";import"./LoadingSpinner-Dfl-93Ba.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BLAt4FO4.js";import"./ProgressBar-CsmWPwQb.js";import"./Label-DEkvlGAI.js";import"./Hidden-BRgRW0lF.js";import"./useLabel-BaFA04Xw.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D8S-En3T.js";import"./EmulatedBoldText-BYVdDx5b.js";import"./Text-Dh3KhDzI.js";import"./AlertIcon-aU-KTTvT.js";import"./Switch-BVKT5Oza.js";import"./useFieldComponent-BKGW_bMF.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CUsTRM_6.js";import"./useFormReset-QF_OYRwm.js";import"./useControlledState-IAFCDfDW.js";import"./VisuallyHidden-BLDMQ79k.js";import"./Dialog-DQ54l-rN.js";import"./RSPContexts-22nxuYm5.js";import"./OverlayArrow-B0-Exi0z.js";import"./Collection-DrDb7tKr.js";import"./CollectionBuilder-DgIT4THq.js";import"./SelectionIndicator-Baqg4pYL.js";import"./Separator-CwdQYf1y.js";import"./SelectionManager-Cg9_nPGa.js";import"./useEvent-d-xS6mf7.js";import"./useCollator-Dxy4kckI.js";import"./FocusScope-D5mGJCBF.js";import"./Action-DdIVuJ0B.js";import"./context-DGvxxzOj.js";import"./useStatic-DVE9BYeG.js";import"./getActionGroupSlot-B63naLE5.js";import"./Popover-D69etV5Q.js";import"./useOverlayController-DPkum4Dd.js";import"./OverlayContextProvider-DPAGiuqq.js";import"./OverlayTrigger-DCrQupdb.js";import"./DialogTriggerView-Cuicc85L.js";import"./Overlay-CAXJWNfR.js";import"./ButtonView-Cr-9skPP.js";import"./Flex-Dz4bH9V2.js";import"./Heading-KUn82X_l.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
