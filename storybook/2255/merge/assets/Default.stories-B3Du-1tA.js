import{j as r}from"./iframe-DRxscI9O.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-B0GCVytt.js";import{L as m}from"./Link-DY2ykMR-.js";import{H as s}from"./HeaderNavigation-Bu7Rup8e.js";import{B as o}from"./Button-Cn0kN-cE.js";import{T as p}from"./Text-8YV9_ufN.js";import{I as h}from"./Image-5w0kWUwb.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CwOJTj9z.js";import{C as M,M as c}from"./ContextMenu-5UQK_TNO.js";import{C as I}from"./ContextMenuTrigger-BKAZp_td.js";import"./ContextMenuSection-4Pmx83k8.js";import{a as T,M as k}from"./Modal-BOsI0Llv.js";import{H}from"./Heading-xcTY6oLo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-cRsKi5gV.js";import"./index-tYubnSWL.js";import"./index-1XGI-8ge.js";import"./remote-5HtQVd9k.js";import"./useLocalizedStringFormatter-BVeqf5XE.js";import"./context-B7-PA0L6.js";import"./utils-CR6NBPUA.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-87CEVAU1.js";import"./useFocus-CSD6pEXF.js";import"./useFocusRing-Dd30mTT2.js";import"./useFocusable-_DeXT1Pt.js";import"./dynamic-CC7KPApC.js";import"./LoadingSpinner--1cga6s1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cf4nBLFb.js";import"./ProgressBar-KolsJC9x.js";import"./Label-CmD6OfqR.js";import"./Hidden-B1W2VzXU.js";import"./useLabel-D6Iwc6BC.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D6b-4R0j.js";import"./EmulatedBoldText-BJ7pd3K2.js";import"./Text-C61ezR9Z.js";import"./AlertIcon-CLPvczjb.js";import"./Switch-CBDugg9-.js";import"./useFieldComponent-B2FoAAf9.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CpTt3FrW.js";import"./useFormReset-Ewuleuhs.js";import"./useControlledState-CvH2MSRC.js";import"./VisuallyHidden-hMszIaj5.js";import"./Dialog-Ds8Y2vRW.js";import"./RSPContexts-O0Lvzjxz.js";import"./OverlayArrow-CnZ26m-G.js";import"./Collection-Tvviv49U.js";import"./CollectionBuilder-BZH3zSXW.js";import"./SelectionIndicator-BPr02Xgn.js";import"./Separator-BIe6_98T.js";import"./SelectionManager-CY_OS_Gu.js";import"./useEvent-Dkz3YFeV.js";import"./useCollator-2RpDHACH.js";import"./FocusScope-CRHoWMnL.js";import"./Action-BUOqPppc.js";import"./context-CkpccYw3.js";import"./useStatic-DhnGFhXh.js";import"./getActionGroupSlot-BLOtZzsx.js";import"./Popover-BKzwq5Pz.js";import"./useOverlayController-CJT4z6k_.js";import"./OverlayContextProvider-CoboHbSN.js";import"./OverlayTrigger-CijLEP7N.js";import"./DialogTriggerView-DxqIqCQq.js";import"./Overlay-Bi6ZnUkK.js";import"./ButtonView-3kbETHdX.js";import"./Flex-Df6FApdG.js";import"./Heading-IJ9Uopg1.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
