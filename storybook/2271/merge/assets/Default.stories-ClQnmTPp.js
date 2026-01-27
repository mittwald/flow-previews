import{j as r}from"./iframe-BK9Ry9wr.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-ClqYagFF.js";import{L as m}from"./Link-DALrfrfA.js";import{H as s}from"./HeaderNavigation-CPkXKTx6.js";import{B as o}from"./Button-CHbQbW2n.js";import{T as p}from"./Text-kkda9Q25.js";import{I as h}from"./Image-CoUQJRBA.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-bhHDqwVa.js";import{C as M,M as c}from"./ContextMenu-CN1RAZOk.js";import{C as I}from"./ContextMenuTrigger-D4daKNMe.js";import"./ContextMenuSection-BoFqJWQI.js";import{a as T,M as k}from"./Modal-D-sQ0sn6.js";import{H}from"./Heading-DbP6ax1z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./index-DqsXJ4xp.js";import"./remote-BKPS1KcS.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./context-DsIoSqto.js";import"./utils-DO-BnPGQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DlcvFeQS.js";import"./useFocus-C5fN754a.js";import"./useFocusRing-Dknf048Z.js";import"./useFocusable-CjhkSx1Q.js";import"./dynamic-QikLaQcI.js";import"./LoadingSpinner-FeF_CDXe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CnSM8-vw.js";import"./ProgressBar-EpzEHd1o.js";import"./Label-BzCkyqHu.js";import"./Hidden-PKJk_aj-.js";import"./useLabel-MQsZvy4I.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DDyWafud.js";import"./EmulatedBoldText-NOAnNUmj.js";import"./Text-Cq5Rc76r.js";import"./AlertIcon-CZTB9fHB.js";import"./Switch-4NgsCL39.js";import"./useFieldComponent-DnU67IFr.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CeqDToFs.js";import"./useFormReset-CaS7VrAz.js";import"./useControlledState-D5gBJyZQ.js";import"./VisuallyHidden-D79PysQv.js";import"./Dialog-CFBRHxwp.js";import"./RSPContexts--7QpwlJX.js";import"./OverlayArrow-CRZVDLqR.js";import"./Collection-DA19Hn3z.js";import"./CollectionBuilder-D0V9DfFD.js";import"./SelectionIndicator-D3Pxw9N-.js";import"./Separator-C7FW_ZyO.js";import"./SelectionManager-BORRpVca.js";import"./useEvent-C7NWigLs.js";import"./useCollator-DyL6zZr9.js";import"./FocusScope-Lcnwzjdv.js";import"./Action-CpYeBO1D.js";import"./context-BUIiTJfL.js";import"./useStatic-D1EtWzUP.js";import"./getActionGroupSlot-BQEdHt4G.js";import"./Popover-BQ3vFjP8.js";import"./useOverlayController-gbn3PAZ_.js";import"./OverlayContextProvider-9n1_NXqk.js";import"./OverlayTrigger-CIrGgPkU.js";import"./DialogTriggerView-DsSWV87n.js";import"./Overlay-Cb7ZVmSd.js";import"./ButtonView-CN2Wm_bq.js";import"./Flex-Dx4yUwBm.js";import"./Heading-AwuUEGOn.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
