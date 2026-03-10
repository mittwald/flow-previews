import{j as r}from"./iframe-DAdEF_a9.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-B_QPuDoh.js";import{L as m}from"./Link-YDXwCESI.js";import{H as s}from"./HeaderNavigation-CVWGgctu.js";import{B as o}from"./Button-BL7hv3yg.js";import{T as p}from"./Text-BlXexclX.js";import{I as h}from"./Image-BFhhqrqA.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BqvI1TA4.js";import{C as M,M as c}from"./MenuItem--rvDEZFV.js";import{C as I}from"./ContextMenuTrigger-_hx5eYaI.js";import"./ContextMenuSection-C3uZY6Us.js";import{M as T}from"./ModalTrigger-C_vInLSd.js";import{M as k}from"./Modal-Bw_NLwNU.js";import{H}from"./Heading-CRr1Ukpo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CSaST_uw.js";import"./index-UhVc0W_W.js";import"./index-DqNUQeP9.js";import"./remote-BQ_isGLI.js";import"./useLocalizedStringFormatter-DuO1Wowh.js";import"./context-DrtV74MG.js";import"./utils-B1o5BDIk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BHQGBA4R.js";import"./usePress-AnOXMqB9.js";import"./useFocusRing-5n4vvaIx.js";import"./useFocusable-vdr5CzJ0.js";import"./dynamic-pIUCZeo6.js";import"./LoadingSpinner-BzYwrllt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DZLmAbDI.js";import"./ProgressBar-Cv5-QMXF.js";import"./Label-DvwKTMzw.js";import"./Hidden-CcrF8gwt.js";import"./useLabel-CcpSY4Um.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DTw6e149.js";import"./EmulatedBoldText-DRN0x44S.js";import"./Text-ConA-l-E.js";import"./AlertIcon-DxXhtuAo.js";import"./ActionBatch-BtBHZwy0.js";import"./useOverlayController-BdzCJ-ub.js";import"./useStatic-CKtHP4uD.js";import"./getActionGroupSlot-2bD_hcYD.js";import"./Popover-CBYvjYoJ.js";import"./OverlayContextProvider-DG82vmF2.js";import"./Dialog-CWk-zVbe.js";import"./RSPContexts-BAZVNF9B.js";import"./OverlayArrow-DM34mO9f.js";import"./useControlledState-D1JeUT3E.js";import"./Collection-kYozbpbp.js";import"./CollectionBuilder-T5ZwCV3b.js";import"./SelectionIndicator-BbyFO4Ic.js";import"./Separator-DdtELOBz.js";import"./SelectionManager-CNmnVwle.js";import"./useEvent-DyHBlkna.js";import"./useCollator-BUCuy1eS.js";import"./FocusScope-Cya-_QqL.js";import"./VisuallyHidden-DtDztoAI.js";import"./Switch-F4fs7rzi.js";import"./useFieldComponent-CLfspKSt.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D2U5XJ_A.js";import"./useFormReset-BoqlzNfE.js";import"./OverlayTrigger-DC0b_r1T.js";import"./DialogTriggerView-0-F2PlRY.js";import"./Overlay-BvmU2R8J.js";import"./ButtonView-B0xnqfb2.js";import"./Flex-BMWRjUwl.js";import"./Heading-B0L1HgOG.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
