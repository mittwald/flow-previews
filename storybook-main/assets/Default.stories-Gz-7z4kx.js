import{j as r}from"./iframe-Bt_Ape3b.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-BQjeLTWb.js";import{L as m}from"./Link-BnH-6vvM.js";import{H as s}from"./HeaderNavigation-DuBB2a9A.js";import{B as o}from"./Button-Bm5EggmV.js";import{T as p}from"./Text-Bs2hbxJA.js";import{I as h}from"./Image-DS9jGepE.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-R3voi_WB.js";import{C as M,M as c}from"./MenuItem-BCU0C9hS.js";import{C as I}from"./ContextMenuTrigger-Db4jGgyD.js";import"./ContextMenuSection-22Ea6AVl.js";import{a as T,M as k}from"./Modal-DOwE1Te9.js";import{H}from"./Heading-C3-uF7Fn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoHw3WqD.js";import"./index-DJTzXtHe.js";import"./index-gN6AAF3-.js";import"./remote-C9NcRL_b.js";import"./useLocalizedStringFormatter-Bayz7Ycu.js";import"./context-BGqy3a6E.js";import"./utils-DGGum7sG.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DErVZDbk.js";import"./useFocus-C-togmBu.js";import"./useFocusRing-Ba6s95SH.js";import"./useFocusable-BX_sV3cU.js";import"./dynamic-D3ysZU61.js";import"./LoadingSpinner-CXrerpwy.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-pXrc8KX9.js";import"./ProgressBar-DgNpOae2.js";import"./Label-Bfb_thp3.js";import"./Hidden-CJIrU941.js";import"./useLabel-BAWBHbvC.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BI8hAkYP.js";import"./EmulatedBoldText-213nH2nf.js";import"./Text-DwU1R_Cs.js";import"./AlertIcon-CAn9yCZm.js";import"./Action-B2h50d-b.js";import"./context-CGPA3PGo.js";import"./useStatic-DpZVpe0y.js";import"./getActionGroupSlot-Cx8mj5km.js";import"./Popover-BlR2GZVE.js";import"./useOverlayController-GBUtTLO-.js";import"./OverlayContextProvider-BwOUPmKM.js";import"./Dialog-3KThjjZh.js";import"./RSPContexts-CtPg4mPr.js";import"./OverlayArrow-CVhGLAoZ.js";import"./useControlledState-Bw01eRXu.js";import"./Collection-CZkVMDHw.js";import"./CollectionBuilder-D9hZnXF0.js";import"./SelectionIndicator-7G59x11l.js";import"./Separator-fa_nI6Bk.js";import"./SelectionManager-BSKqz5jy.js";import"./useEvent-B7_y21W_.js";import"./useCollator-CvPTpoia.js";import"./FocusScope-BOag0uW3.js";import"./VisuallyHidden-CM2m0J8e.js";import"./Switch-BRI9WwsV.js";import"./useFieldComponent-QpDNRghi.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BlnK1BaH.js";import"./useFormReset-BU_Yh1RY.js";import"./OverlayTrigger-BxvpYE5H.js";import"./DialogTriggerView-BVEhLQjP.js";import"./Overlay-B1L_xSxT.js";import"./ButtonView-5kWU9QKD.js";import"./Flex-CPdGDyFA.js";import"./Heading-CF5bGxey.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
