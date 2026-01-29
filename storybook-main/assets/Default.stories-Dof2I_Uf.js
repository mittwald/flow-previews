import{j as r}from"./iframe-Ci26vI3B.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CM9E6h9H.js";import{L as m}from"./Link-Iwra83HD.js";import{H as s}from"./HeaderNavigation-Dbb9ypaS.js";import{B as o}from"./Button-Bgg1raPB.js";import{T as p}from"./Text-BThwDV_-.js";import{I as h}from"./Image-Bokl-6jM.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Bclre7ul.js";import{C as M,M as c}from"./MenuItem-GTjoExhI.js";import{C as I}from"./ContextMenuTrigger-Dmvy7qOU.js";import"./ContextMenuSection-B4FW6kIZ.js";import{a as T,M as k}from"./Modal-B8QuKtxq.js";import{H}from"./Heading--cJO5BZg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BCoZzahf.js";import"./index-3wEtqLOq.js";import"./index-BgjIHz1Y.js";import"./remote-BeH756Ak.js";import"./useLocalizedStringFormatter-D463xrfM.js";import"./context-21njfTP5.js";import"./utils-Prtw8tAI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BemMoN-v.js";import"./usePress-BIn545i6.js";import"./useFocusRing-IT4cpc8M.js";import"./useFocusable-C470YARL.js";import"./dynamic-CWUTf5k8.js";import"./LoadingSpinner-CiE2xtQ-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B-v9WAC7.js";import"./ProgressBar-Cd-gbxhy.js";import"./Label-CzTNGA-w.js";import"./Hidden-Bh4pa2b3.js";import"./useLabel-D7Kjovyf.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CkG7QNAh.js";import"./EmulatedBoldText-TNvCnD2A.js";import"./Text-BBkEKRDK.js";import"./AlertIcon-CQS_iHVq.js";import"./Action-BUuW9nUE.js";import"./context-BCzJciSx.js";import"./useStatic-wckFiMZJ.js";import"./getActionGroupSlot--c77iWbK.js";import"./Popover-DZyVF07N.js";import"./useOverlayController-BSQ_oo1O.js";import"./OverlayContextProvider-Df7HHBCA.js";import"./Dialog-DpyFyuBj.js";import"./RSPContexts-wYlI8WBg.js";import"./OverlayArrow-G0bNf6l9.js";import"./useControlledState-B4ASThyn.js";import"./Collection-B2Ssnxvf.js";import"./CollectionBuilder-BZqHFZmJ.js";import"./SelectionIndicator-DzwumZRP.js";import"./Separator-D2dDCvgZ.js";import"./SelectionManager-3iDEc--o.js";import"./useEvent-DLiSbdt5.js";import"./useCollator-BE-Xf4hi.js";import"./FocusScope-ByCQWjTm.js";import"./VisuallyHidden-BSnmZ3mx.js";import"./Switch-BAcmuNxp.js";import"./useFieldComponent-DlKim18O.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Da3OyMoT.js";import"./useFormReset-CoDGZCB3.js";import"./OverlayTrigger-BQgQEM-6.js";import"./DialogTriggerView-Bu-5s-wO.js";import"./Overlay-BiJSi7pd.js";import"./ButtonView-CpgiMrkS.js";import"./Flex-B6VuHuEV.js";import"./Heading-CXYj_MKW.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
