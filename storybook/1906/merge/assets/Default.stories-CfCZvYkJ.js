import{j as r}from"./iframe-S6a6IBGW.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-D0GzEl3K.js";import{L as m}from"./Link-D-URpzvg.js";import{H as s}from"./HeaderNavigation-BrE8dcPi.js";import{B as o}from"./Button-B33IEcV3.js";import{T as p}from"./Text-CLecf1p6.js";import{I as h}from"./Image-C8_H4hBq.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DiCx8oDo.js";import{C as M,M as c}from"./ContextMenu-CyoIs3h1.js";import{C as I}from"./ContextMenuTrigger-D5927t21.js";import"./ContextMenuSection-CXnCaYUl.js";import{a as T,M as k}from"./Modal-BVqAx-HY.js";import{H}from"./Heading-OEjBXIpA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BLLiPPDy.js";import"./index-l1wA_Qpp.js";import"./index-C8QsAo4A.js";import"./remote-CCjzztUh.js";import"./useLocalizedStringFormatter-DpHStB2_.js";import"./context-CXquv49b.js";import"./utils-B8ercvf4.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BUR3MtQf.js";import"./useFocus--oJxMCZo.js";import"./useFocusRing-pCPuJRtg.js";import"./useFocusable-DTyt-kbS.js";import"./dynamic-wFxxwS8T.js";import"./LoadingSpinner-ngl346gH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BnRrl5N8.js";import"./ProgressBar-f-zsGPPU.js";import"./Label-DxhkDnS7.js";import"./Hidden-CVYoRnxj.js";import"./useLabel-I1naabyM.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C6w_OiT9.js";import"./EmulatedBoldText-PjFBcLAJ.js";import"./Text-XPHoRcaC.js";import"./AlertIcon-DgqrgpKu.js";import"./Switch-CvxXcXnZ.js";import"./useFieldComponent-C7YS4lAg.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DYZLdreX.js";import"./useFormReset-DK3gdO9Q.js";import"./useControlledState-BHa0sYDq.js";import"./VisuallyHidden-BN0xrgav.js";import"./Dialog-C_QuIxo5.js";import"./RSPContexts-DL3JmftS.js";import"./OverlayArrow-B-DFCcpR.js";import"./Collection-BbaIJWHd.js";import"./CollectionBuilder-Cv1bZrpu.js";import"./SelectionIndicator-DSvv5afS.js";import"./Separator-CvanrP9u.js";import"./SelectionManager-Bk0PvS8a.js";import"./useEvent--nB5Gcy3.js";import"./useCollator-DUo0f6hW.js";import"./FocusScope-BEprXHob.js";import"./Action-D3nLwb6j.js";import"./context-DRdj7qWz.js";import"./useStatic-DJ0VynuZ.js";import"./getActionGroupSlot-13Cq_BqQ.js";import"./Popover-CTHthEzP.js";import"./useOverlayController-D5w3iZSN.js";import"./OverlayContextProvider-BTF4iLEG.js";import"./OverlayTrigger-4uRsw7zJ.js";import"./DialogTriggerView-CjaRjk5V.js";import"./Overlay-CvokbPF3.js";import"./ButtonView-Dfq4uPzV.js";import"./Flex-XbL4k48m.js";import"./Heading-B4TNl6d1.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
