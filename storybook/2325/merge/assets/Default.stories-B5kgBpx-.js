import{j as r}from"./iframe-C5ZTNo7B.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Bhk_rtuP.js";import{L as m}from"./Link-DMEIb5A5.js";import{H as s}from"./HeaderNavigation-Dmousf_c.js";import{B as o}from"./Button-CTD3uiWd.js";import{T as p}from"./Text-vc01bOb1.js";import{I as h}from"./Image-C0BIeoBe.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BNQ9qNCg.js";import{C as M,M as c}from"./MenuItem-DyoALSMG.js";import{C as I}from"./ContextMenuTrigger-CkpQtoeY.js";import"./ContextMenuSection-B0O-s6DP.js";import{M as T}from"./ModalTrigger-BvlAgkcl.js";import{M as k}from"./Modal-DnrTq3-t.js";import{H}from"./Heading-CV5pK1fF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C74LPcu8.js";import"./index-DezMBlvl.js";import"./index-L0hXSSnD.js";import"./remote-DVpXA9eO.js";import"./useLocalizedStringFormatter-CDqYfAHq.js";import"./context-Zfd40gqJ.js";import"./utils-BuDA3Ujk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-wNGus_RY.js";import"./usePress-ef-k5VSc.js";import"./useFocusRing-rbh4dKQ_.js";import"./useFocusable-DlWx3Zdp.js";import"./dynamic-Bw3_nZ9y.js";import"./LoadingSpinner-DA9Opfj3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B6XpNhBF.js";import"./ProgressBar-D_9cWfd2.js";import"./Label-BSZlsNs_.js";import"./Hidden-U4jsQoYY.js";import"./useLabel-BfXWSkVN.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CszbwzXz.js";import"./EmulatedBoldText-DrBpqUUw.js";import"./Text-DfHOPDAf.js";import"./AlertIcon-Da43IrrR.js";import"./ActionBatch-DQnznSVa.js";import"./useOverlayController-DKmEbncM.js";import"./useStatic-yr3GM-AX.js";import"./getActionGroupSlot-D914C5WA.js";import"./Popover-pQAuXdpQ.js";import"./OverlayContextProvider-CtLnis9C.js";import"./Dialog-n3Xabcyo.js";import"./RSPContexts-BwPNB4Pl.js";import"./OverlayArrow-F8uV4qkU.js";import"./useControlledState-e_mWhKHk.js";import"./Collection-CZnzaiUv.js";import"./CollectionBuilder-BNhwwjuE.js";import"./SelectionIndicator-CrR9Mcxf.js";import"./Separator-BabRRkw2.js";import"./SelectionManager-MjLIZfUi.js";import"./useEvent-BqK5cB2S.js";import"./useCollator-CAZNHi0m.js";import"./FocusScope-PkAgaAiM.js";import"./VisuallyHidden-eGwjz06V.js";import"./Switch-CL25F7v7.js";import"./useFieldComponent-hFC9tXxl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BJVWleFj.js";import"./useFormReset-D7awHB0C.js";import"./OverlayTrigger-B9JYxYmq.js";import"./DialogTriggerView-DEin9pyt.js";import"./Overlay-DtDYWi_A.js";import"./ButtonView-DEthqiLB.js";import"./Flex-CwoZU0pA.js";import"./Heading-CeFx_rtS.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
