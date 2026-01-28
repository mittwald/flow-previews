import{j as r}from"./iframe-DcJYxA4H.js";import{q as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-C1b-rglK.js";import{L as m}from"./Link-sZ5Q1szt.js";import{H as s}from"./HeaderNavigation-DGwpvCks.js";import{B as o}from"./Button-ByRmZgOS.js";import{T as p}from"./Text-DtgxB8-I.js";import{I as h}from"./Image-DB1cY5A5.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-q4aSBKpk.js";import{C as M,M as c}from"./ContextMenu-BaHZXq3w.js";import{C as I}from"./ContextMenuTrigger-DZXelGJV.js";import"./ContextMenuSection-QDoQ1eGc.js";import{a as T,M as k}from"./Modal-DQL1GPEZ.js";import{H}from"./Heading-CIr8mTXG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BLRiscD5.js";import"./index-DqZIl2km.js";import"./index-BLaZpk-P.js";import"./remote-Bz3vE1W1.js";import"./useLocalizedStringFormatter-CF3rZOx1.js";import"./context-qV6jeEP3.js";import"./utils-DilzIpMR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CBKKPZUx.js";import"./usePress-CoiuKGvm.js";import"./useFocusRing-KHZvHeNt.js";import"./useFocusable-CBOZtalu.js";import"./dynamic-BeRAROrj.js";import"./LoadingSpinner-Cq4_0Dfa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-igLlXErA.js";import"./ProgressBar-NBTy9B_U.js";import"./Label-C5pMaxrW.js";import"./Hidden-DfDLmmBw.js";import"./useLabel-DpAfaget.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DuGwj8Dx.js";import"./EmulatedBoldText-B8m3SU7U.js";import"./Text-CtAF_MdJ.js";import"./AlertIcon-5jttAq4b.js";import"./Switch-CNxKYhBR.js";import"./useFieldComponent-rnjT2dRC.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dz0vAxRa.js";import"./useFormReset-BxLymg31.js";import"./useControlledState-BqUYry3y.js";import"./VisuallyHidden-5QTr2j1N.js";import"./Dialog-Dz1EswEt.js";import"./RSPContexts-B2T9ptP_.js";import"./OverlayArrow-wMKeeSQ0.js";import"./Collection-CKg9fKRI.js";import"./CollectionBuilder-Cc_loPne.js";import"./SelectionIndicator-DgZf9HEL.js";import"./Separator-BAQ5hF_i.js";import"./SelectionManager-yA8P5A7T.js";import"./useEvent-stiRI7x_.js";import"./useCollator-CoXNjTxb.js";import"./FocusScope-CWIATeBq.js";import"./Action-Dlz18l4c.js";import"./context-D2f0m16x.js";import"./useStatic-CtzGIMZo.js";import"./getActionGroupSlot-DWUJnrNV.js";import"./Popover-B9Nlr10i.js";import"./useOverlayController-B1TTUHMS.js";import"./OverlayContextProvider-77-UrxPo.js";import"./OverlayTrigger-bsYBPnMH.js";import"./DialogTriggerView-BIVtx_zg.js";import"./Overlay-Bz1QQdth.js";import"./ButtonView-ByBYPO5_.js";import"./Flex-fpbtd4s9.js";import"./Heading-BwYTefZe.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,Zr as default};
