import{j as r}from"./iframe-BfVXcSwu.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-DP3Jd3bc.js";import{L as m}from"./Link-l8-PKUJy.js";import{H as s}from"./HeaderNavigation-UnIgAHMX.js";import{B as o}from"./Button-BWaSf0b-.js";import{T as p}from"./Text-DuT5OHtj.js";import{I as h}from"./Image-CTJ8ZeMx.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CG1tod06.js";import{C as M,M as c}from"./MenuItem-jRZJeTCK.js";import{C as I}from"./ContextMenuTrigger-CliJsYln.js";import"./ContextMenuSection-CkxzJqxG.js";import{a as T,M as k}from"./Modal-AC9_zXUQ.js";import{H}from"./Heading-gqF52g1x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CjS79BQ2.js";import"./index-NVTM04Bh.js";import"./index-CeMFBQ52.js";import"./remote-cx7SRDrO.js";import"./useLocalizedStringFormatter-B7z2a2Dc.js";import"./context-BIORzbvt.js";import"./utils-fXq1spu5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-YiRiyJqJ.js";import"./usePress-CZJvw_K-.js";import"./useFocusRing-2MdBuBce.js";import"./useFocusable-Ct-dNppG.js";import"./dynamic-BmLDKJfM.js";import"./LoadingSpinner-uBvx8mS0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DmoQnqed.js";import"./ProgressBar-CsSv4sp0.js";import"./Label-CAf_YUDZ.js";import"./Hidden-B9jAGDqb.js";import"./useLabel-_iuRLI1y.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-6PMbihrp.js";import"./EmulatedBoldText-D7Dqf59X.js";import"./Text-DLMHe2l_.js";import"./AlertIcon-DMbcP_TF.js";import"./ActionBatch-CJiux6Y0.js";import"./context-C_1OFCCp.js";import"./useStatic-DbJ3Jck6.js";import"./getActionGroupSlot-DFXtDzme.js";import"./Popover-CcjFjnE9.js";import"./useOverlayController-DUljrIWa.js";import"./OverlayContextProvider-BGRrPnlE.js";import"./Dialog-DclKvE_W.js";import"./RSPContexts-BvooXi_W.js";import"./OverlayArrow-DmRhraF5.js";import"./useControlledState-DrmC-rK0.js";import"./Collection-BIYmOT8q.js";import"./CollectionBuilder-B88Jj6se.js";import"./SelectionIndicator-DdESkGsw.js";import"./Separator-C-w1woXG.js";import"./SelectionManager-DDxW4Xvy.js";import"./useEvent-N7DHQy5M.js";import"./useCollator-BH_ZCLE4.js";import"./FocusScope-DYj4AULV.js";import"./VisuallyHidden-CW_0epyS.js";import"./Switch-eV6dxcII.js";import"./useFieldComponent-CiLN9FTD.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BlNanmhk.js";import"./useFormReset-bqmCiwf6.js";import"./OverlayTrigger-DRzwAl-J.js";import"./DialogTriggerView-DeUjYAOs.js";import"./Overlay-C9uLeaU7.js";import"./ButtonView-ZDfm5U5H.js";import"./Flex-BlX92A2C.js";import"./Heading-OAdJfP_j.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
