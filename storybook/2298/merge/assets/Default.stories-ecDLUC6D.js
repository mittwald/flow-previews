import{j as r}from"./iframe-CTX0Bv2_.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-nHMyX661.js";import{L as m}from"./Link-C4PXsJDi.js";import{H as s}from"./HeaderNavigation-D1xP1Hwo.js";import{B as o}from"./Button--JyduJMj.js";import{T as p}from"./Text-DLhfgo2a.js";import{I as h}from"./Image-ukiDRfPM.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BO_eDNXJ.js";import{C as M,M as c}from"./MenuItem-DYNpxOrQ.js";import{C as I}from"./ContextMenuTrigger-C788Are4.js";import"./ContextMenuSection-B5km2Fq1.js";import{a as T,M as k}from"./Modal-BhaxEq9R.js";import{H}from"./Heading-Dk_R5Gok.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CqO4Js9m.js";import"./index-BFwThDrE.js";import"./index-Cuy-twEi.js";import"./remote-Dp_KpE6s.js";import"./useLocalizedStringFormatter-Ci9fYHdG.js";import"./context-BlMA_qTH.js";import"./utils-DEP6wxfF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Brpf5vcF.js";import"./usePress-BBVfaVqb.js";import"./useFocusRing-jdOUMH5T.js";import"./useFocusable-C46UWCUq.js";import"./dynamic-izZr6sj3.js";import"./LoadingSpinner-Ch_rD6BR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C6E7IXzn.js";import"./ProgressBar-KcEl-cak.js";import"./Label-B9GQQ3x4.js";import"./Hidden-LDMxuxmc.js";import"./useLabel-CflB3N3A.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-NwcAgtgI.js";import"./EmulatedBoldText-EuanT-4h.js";import"./Text-CfE4Vxx5.js";import"./AlertIcon-CvLHNETq.js";import"./Action-IRtc2zB7.js";import"./context-DDqdITge.js";import"./useStatic-CPXlsR2u.js";import"./getActionGroupSlot-CcrxUumb.js";import"./Popover-CrXi74XC.js";import"./useOverlayController-DZ6rN5UT.js";import"./OverlayContextProvider-DQ_-g1_x.js";import"./Dialog-B47KQ7WD.js";import"./RSPContexts-FayjYhqz.js";import"./OverlayArrow-B_Rckldo.js";import"./useControlledState-BSzbNF-6.js";import"./Collection-C9AhhR6W.js";import"./CollectionBuilder-DIcncGvh.js";import"./SelectionIndicator-BIEwPYk3.js";import"./Separator-Bna16C5N.js";import"./SelectionManager-BPzTX_0m.js";import"./useEvent-CpnFGpfj.js";import"./useCollator-Ac6OChDz.js";import"./FocusScope-Dney2d0V.js";import"./VisuallyHidden-DBqpLolF.js";import"./Switch-DCUH1Ng1.js";import"./useFieldComponent-mADlv6K1.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CVw6H8q9.js";import"./useFormReset-CFaexdLs.js";import"./OverlayTrigger-DD_Axl8O.js";import"./DialogTriggerView-DGkAPB_7.js";import"./Overlay-gDV5wqgI.js";import"./ButtonView-Dt-QAv61.js";import"./Flex-rlDEoo_y.js";import"./Heading-BWaAz6go.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
