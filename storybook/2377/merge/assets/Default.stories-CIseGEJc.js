import{j as r}from"./iframe-JHVlk64D.js";import{u as d,a7 as l,a3 as g,a8 as u,a9 as x}from"./IconWarning-D57fWT31.js";import{L as m}from"./Link-CjG243nZ.js";import{H as s}from"./HeaderNavigation-DNuGbcci.js";import{B as o}from"./Button-BViHWx5D.js";import{T as p}from"./Text-D35H-2yr.js";import{I as h}from"./Image-CL6Hl73G.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BjZdAni4.js";import{C as M,M as c}from"./MenuItem-DTpcEFCV.js";import{C as I}from"./ContextMenuTrigger-aArxDUom.js";import"./ContextMenuSection-0h5wVCnN.js";import{M as T}from"./ModalTrigger-BvmE1C_A.js";import{M as k}from"./Modal-Dd9stJQr.js";import{H}from"./Heading-B5Pon5qA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ck8MmBsO.js";import"./index-w2uwoc3h.js";import"./index-BF-KrcKY.js";import"./remote-CdnDmctD.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./context-ArJ603f0.js";import"./utils-D9FbIhNL.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Cks5m45E.js";import"./platform-Dz8CwCz0.js";import"./usePress-Dt-0MkOU.js";import"./useFocusRing-CHLeDkTy.js";import"./useFocusable-vxzxlCI8.js";import"./dynamic-B8NPXIjt.js";import"./LoadingSpinner-Bl1fRewj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CV338ZHI.js";import"./ProgressBar-RoFvxVlz.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./useLabel-9l7svqw5.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CH4iE_n_.js";import"./EmulatedBoldText-DwNSiPCb.js";import"./Text-BPDMqDL5.js";import"./AlertIcon-B-el1D17.js";import"./ActionBatch-1qW2-LTl.js";import"./useOverlayController-B_kJVQUM.js";import"./useStatic-BkeDEY_1.js";import"./getActionGroupSlot-DipsrrNF.js";import"./Popover-KhMzeTk6.js";import"./OverlayContextProvider-ClUum8Ul.js";import"./Dialog-DIqACfnD.js";import"./RSPContexts-BaSES6Qq.js";import"./OverlayArrow-DI9sbb4v.js";import"./useControlledState-BK0dEcU9.js";import"./Collection-CRq1qG1J.js";import"./CollectionBuilder-Dx0vl2tB.js";import"./SelectionIndicator-D6El124b.js";import"./Separator-8crMrP-e.js";import"./SelectionManager-DJjQCPb0.js";import"./useEvent-CalNBU8C.js";import"./useCollator-YDjG1_LZ.js";import"./FocusScope-D4b0Moap.js";import"./VisuallyHidden-CJBb4HxH.js";import"./Switch-qSM95aIv.js";import"./useFieldComponent-Dm_EHwx7.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BOoA6Az8.js";import"./useFormReset-CuVjUJoL.js";import"./OverlayTrigger-CMrYL6HW.js";import"./DialogTriggerView-CIorkltE.js";import"./Overlay-KmyQfYDW.js";import"./ButtonView-BHsHy_WH.js";import"./Flex-CNTnvpl9.js";import"./Heading-DWwskDgI.js";const zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Fr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Fr as __namedExportsOrder,zr as default};
