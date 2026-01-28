import{j as r}from"./iframe-CgeYxcj8.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CNkUjla4.js";import{L as m}from"./Link-Ds4c6t_f.js";import{H as s}from"./HeaderNavigation-C69BMoeF.js";import{B as o}from"./Button-DR_1qYQ2.js";import{T as p}from"./Text-fEw-hlGn.js";import{I as h}from"./Image-DVSkmBI1.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-C7ZNtW0P.js";import{C as M,M as c}from"./MenuItem-TeoJ2_Bx.js";import{C as I}from"./ContextMenuTrigger-D8oehZ8G.js";import"./ContextMenuSection-CBMk4BqO.js";import{a as T,M as k}from"./Modal-CtI8jHTz.js";import{H}from"./Heading-ze7wSVUJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dnk3jDHh.js";import"./index-DGuDz7oW.js";import"./index-SS9EXt6e.js";import"./remote-CtdlUY7L.js";import"./useLocalizedStringFormatter-C8PcX-p4.js";import"./context-CYaZBhkg.js";import"./utils-BH6Z59zo.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BDu45Ayq.js";import"./usePress-DX014ZyL.js";import"./useFocusRing-BNw3vzKJ.js";import"./useFocusable-UxYwgi7z.js";import"./dynamic-CbTKsx_B.js";import"./LoadingSpinner-Czq10wCK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-x-eiCRcG.js";import"./ProgressBar-FiBC1zNG.js";import"./Label-DsJ6qzWh.js";import"./Hidden-kX7iUH63.js";import"./useLabel-CNkOKuMy.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DJjrqqpQ.js";import"./EmulatedBoldText-B9jRyhwt.js";import"./Text-D1ETBO0D.js";import"./AlertIcon-BVEvo4xP.js";import"./Action-DlDUTAjM.js";import"./context-x8law5mp.js";import"./useStatic-BH0JS_W8.js";import"./getActionGroupSlot-Bx9RQO4h.js";import"./Popover-DyDWo3ld.js";import"./useOverlayController-Dm4XBIwK.js";import"./OverlayContextProvider-DFDHe7pa.js";import"./Dialog-LUBljj5i.js";import"./RSPContexts-D3svuC0u.js";import"./OverlayArrow-1gQSfgj3.js";import"./useControlledState-CjPSf5xo.js";import"./Collection-D2EAa2oZ.js";import"./CollectionBuilder-C9W5aaEP.js";import"./SelectionIndicator-BaQZNiQ3.js";import"./Separator-CcrRe_Zj.js";import"./SelectionManager-BP1ghRLo.js";import"./useEvent-DvVlPNbe.js";import"./useCollator-Jdxh6jfg.js";import"./FocusScope-CGvyVacv.js";import"./VisuallyHidden-ty8jLyKB.js";import"./Switch-CoRSaaHb.js";import"./useFieldComponent-DjF7VplI.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D5RJaWcN.js";import"./useFormReset-CLCQkLzV.js";import"./OverlayTrigger-B5SAmsfY.js";import"./DialogTriggerView-AOnHbWIf.js";import"./Overlay-jeeezbZh.js";import"./ButtonView-DNnrBHqR.js";import"./Flex-DWkhY8Vx.js";import"./Heading-CYGvuqGo.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
