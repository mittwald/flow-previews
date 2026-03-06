import{j as r}from"./iframe-BLMVSPV3.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-DFK0SIT3.js";import{L as m}from"./Link-CC9mDZZh.js";import{H as s}from"./HeaderNavigation-CjQlg2pd.js";import{B as o}from"./Button-RfhP7QLX.js";import{T as p}from"./Text-CGLO_VNW.js";import{I as h}from"./Image-meUkFuWq.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-6WZJIgHY.js";import{C as M,M as c}from"./MenuItem-DeriIvZy.js";import{C as I}from"./ContextMenuTrigger-CBsmsL4G.js";import"./ContextMenuSection-BvWYHMvE.js";import{M as T}from"./ModalTrigger-CpRwqVZC.js";import{M as k}from"./Modal-Bevsmrtz.js";import{H}from"./Heading-BFhkb_kv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B0rn9FTV.js";import"./index-YglXY0sG.js";import"./index-B-iUx4vd.js";import"./remote-B_iWR4WH.js";import"./useLocalizedStringFormatter-CLP_FKMn.js";import"./context-BPm1HUwp.js";import"./utils-je6Mfjnf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-B92CKOsl.js";import"./usePress-DgsdN2D5.js";import"./useFocusRing-IVoDVSxb.js";import"./useFocusable-DsXmOaAq.js";import"./dynamic-DAjDUp_G.js";import"./LoadingSpinner-BCnxKzgI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-4lGsfIj0.js";import"./ProgressBar-qhTm7W5b.js";import"./Label-BuUunTyu.js";import"./Hidden-BcBJmzcB.js";import"./useLabel-DcRiwsCk.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CtcijgRV.js";import"./EmulatedBoldText-DNZQf_gm.js";import"./Text-DPHxU6u7.js";import"./AlertIcon-BrGMsY0L.js";import"./ActionBatch-Cx_n21HW.js";import"./useOverlayController-DYQ-WflD.js";import"./useStatic-BWoTOt9k.js";import"./getActionGroupSlot-BdFM70uG.js";import"./Popover-CG38Kmd4.js";import"./OverlayContextProvider-D_krly58.js";import"./Dialog-BT74UQ_T.js";import"./RSPContexts-BTwsU_Cp.js";import"./OverlayArrow-DqBJvRH_.js";import"./useControlledState-Bp8O9Zqw.js";import"./Collection-D_0q5y9E.js";import"./CollectionBuilder-DVFPK5dr.js";import"./SelectionIndicator-MBj-w85S.js";import"./Separator-CN6eRPM4.js";import"./SelectionManager-Dh2FxkL1.js";import"./useEvent-UzzlN-16.js";import"./useCollator-DnWD9muh.js";import"./FocusScope-uhT9mVfL.js";import"./VisuallyHidden-DQ4qIwkH.js";import"./Switch-DD_qh4XP.js";import"./useFieldComponent-y-VnQdYS.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-7CUyy1jr.js";import"./useFormReset-7ZGeCzym.js";import"./OverlayTrigger-CUid1uyF.js";import"./DialogTriggerView-DE8WDx_R.js";import"./Overlay-CEllIMRS.js";import"./ButtonView-BFvaDy1U.js";import"./Flex-DMIA7a_N.js";import"./Heading-DGpyEp1Z.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
