import{j as r}from"./iframe-CFTqgbub.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BmBcYBZE.js";import{L as m}from"./Link-J9e9j8q_.js";import{H as s}from"./HeaderNavigation-B0873D5S.js";import{B as o}from"./Button-DYo4uywI.js";import{T as p}from"./Text-DGb4Yj-N.js";import{I as h}from"./Image-BYmweDIt.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DYbItyG9.js";import{C as M,M as c}from"./MenuItem-_hQtauxK.js";import{C as I}from"./ContextMenuTrigger-YPHTEBHC.js";import"./ContextMenuSection-C0W18m8x.js";import{M as T}from"./ModalTrigger-DegqZKXp.js";import{M as k}from"./Modal-bFHglDPM.js";import{H}from"./Heading-439pSAMO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./index-B_-FfeBA.js";import"./remote-BlniWp0j.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./context-DrUKb0cF.js";import"./utils-B4tY5r2S.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BOeBkWuf.js";import"./usePress-DIXZ9Ppe.js";import"./useFocusRing-Ck0KvK0z.js";import"./useFocusable-Dm8xzBfk.js";import"./dynamic-GrVhUXuF.js";import"./LoadingSpinner-kIQpS8IZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BKBgz7xZ.js";import"./ProgressBar-Du8sUV-4.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./useLabel-BdtjZifw.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DzYF9AGw.js";import"./EmulatedBoldText-Dyut30RV.js";import"./Text-Djzy7Vo0.js";import"./AlertIcon-DR1EaW6b.js";import"./ActionBatch-D8GPDYy5.js";import"./useOverlayController-DR05g40f.js";import"./useStatic-BFPJMVns.js";import"./getActionGroupSlot-B6jQShKX.js";import"./Popover-CFUr0FGw.js";import"./OverlayContextProvider-G6K1v8D7.js";import"./Dialog-BnZ8dnOj.js";import"./RSPContexts-CFURB7yy.js";import"./OverlayArrow-5aYILyU8.js";import"./useControlledState-SUsbXgrM.js";import"./Collection-XFdgj0zz.js";import"./CollectionBuilder-B8mkHCYD.js";import"./SelectionIndicator-ex17VsHG.js";import"./Separator-BbFY4QIS.js";import"./SelectionManager-BQIYg6Kc.js";import"./useEvent-Bix3gDIS.js";import"./useCollator-BwS2zx0_.js";import"./FocusScope-BtEv7ihW.js";import"./VisuallyHidden-CB7azLHp.js";import"./Switch-TuRcvHwR.js";import"./useFieldComponent-CbaMz5aY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CSmxVOAE.js";import"./useFormReset-BbhAN2Ls.js";import"./OverlayTrigger-C_Zwa0aQ.js";import"./DialogTriggerView-DsPuVW4T.js";import"./Overlay-BHE1PsiE.js";import"./ButtonView-B-4zjQiO.js";import"./Flex-DlegQ8We.js";import"./Heading-D2J3_q6l.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
