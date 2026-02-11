import{j as r}from"./iframe-DN5oj4yX.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-C1DuEctF.js";import{L as m}from"./Link-DmqPF8TL.js";import{H as s}from"./HeaderNavigation-DBsspL1C.js";import{B as o}from"./Button-CF7BcIrS.js";import{T as p}from"./Text-B6wg_w_v.js";import{I as h}from"./Image-UqrTskAV.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DoVHVCz_.js";import{C as M,M as c}from"./MenuItem-DiqX_rw5.js";import{C as I}from"./ContextMenuTrigger-CfIxeI-D.js";import"./ContextMenuSection-D4h9xx_Q.js";import{a as T,M as k}from"./Modal-BoMNOPWY.js";import{H}from"./Heading-CAunjdNa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D5tzpGYQ.js";import"./index-D8Wg1xo0.js";import"./index-DUndj3nA.js";import"./remote-CDfMg8I2.js";import"./useLocalizedStringFormatter-Dqjs-V7P.js";import"./context-BQuP-QJJ.js";import"./utils-u73lU7bl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CanfFAPv.js";import"./usePress-dDK8KT2l.js";import"./useFocusRing-Cbnk9x9v.js";import"./useFocusable-6yyx7e1u.js";import"./dynamic-D_PfG4t1.js";import"./LoadingSpinner-IkyiKoyX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQ5wMWnN.js";import"./ProgressBar-ChQMk24B.js";import"./Label-D5uLN87S.js";import"./Hidden-DvJV1KBO.js";import"./useLabel-52-JVqkW.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-t02O3gv-.js";import"./EmulatedBoldText-rvhjeWKi.js";import"./Text-mAHBNKmk.js";import"./AlertIcon-DDaSQZAJ.js";import"./Action-GYKv85ul.js";import"./context-BOqeUKEn.js";import"./useStatic-D8kDoy_M.js";import"./getActionGroupSlot-B3lnxGbD.js";import"./Popover-BkLmPzXt.js";import"./useOverlayController-B28PiJc5.js";import"./OverlayContextProvider-BWiZzEmK.js";import"./Dialog-CpK4NMTe.js";import"./RSPContexts-CT4Rd2GX.js";import"./OverlayArrow-BufWJWwU.js";import"./useControlledState-Dl4qb5FM.js";import"./Collection-DN16OmDe.js";import"./CollectionBuilder-CE82C-kz.js";import"./SelectionIndicator-BsSExIou.js";import"./Separator-CB9FghXV.js";import"./SelectionManager-upRYqEYI.js";import"./useEvent-CkPyHfFN.js";import"./useCollator-DUmbl0t5.js";import"./FocusScope-BtxR-tB9.js";import"./VisuallyHidden-BipIpOcd.js";import"./Switch-gGhtjee-.js";import"./useFieldComponent-DVOrWc0y.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-4PZgoKqc.js";import"./useFormReset-B44cc5VH.js";import"./OverlayTrigger-DmhzA4cb.js";import"./DialogTriggerView-CQrHVoJK.js";import"./Overlay-CSXh8vb2.js";import"./ButtonView-yRoRDfha.js";import"./Flex-Chey4bz-.js";import"./Heading-sKqg2l7g.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
