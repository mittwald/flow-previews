import{j as r}from"./iframe-CZIIjdGx.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CoTQUaDh.js";import{L as m}from"./Link-BEFP1Tne.js";import{H as s}from"./HeaderNavigation-DX8fo65U.js";import{B as o}from"./Button-ECMB5KMY.js";import{T as p}from"./Text-B-NqQsb3.js";import{I as h}from"./Image-DJk4WXtM.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-lhD-lMow.js";import{C as M,M as c}from"./MenuItem-DmwSc0mY.js";import{C as I}from"./ContextMenuTrigger-CEer3B8h.js";import"./ContextMenuSection-BEfLxAcM.js";import{a as T,M as k}from"./Modal-vx2NCNPZ.js";import{H}from"./Heading-4cAYx9fy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-fB-3SEHh.js";import"./index-BsTtmOW1.js";import"./index-7Gan3Sd3.js";import"./remote-BLk-VuSO.js";import"./useLocalizedStringFormatter-KKcnPxqh.js";import"./context-B5Owy1-_.js";import"./utils-CzlwFdSi.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BLv7u4S3.js";import"./usePress-DFDeIEOr.js";import"./useFocusRing-CqWo6_om.js";import"./useFocusable-deUO30SV.js";import"./dynamic-gRVBa7iD.js";import"./LoadingSpinner-pfinSAIk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-NmLihlhr.js";import"./ProgressBar-DT5pCrN6.js";import"./Label-DuyHno6H.js";import"./Hidden-BdFAzqYk.js";import"./useLabel-CmRl_D3U.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Cl51s5Ql.js";import"./EmulatedBoldText-BBfJQ4d1.js";import"./Text-B_tooMjG.js";import"./AlertIcon-WrrDZg35.js";import"./Action-Bw6l21lc.js";import"./context-D5Js5cga.js";import"./useStatic-BkmFYiV8.js";import"./getActionGroupSlot-DTbiEWtg.js";import"./Popover-B4mVvqXX.js";import"./useOverlayController-BPxzacO6.js";import"./OverlayContextProvider-Dc5mpEmz.js";import"./Dialog-Cut31Nqj.js";import"./RSPContexts-BcZ6F9IB.js";import"./OverlayArrow-PNzJR_LP.js";import"./useControlledState-DqlM9bHJ.js";import"./Collection-Bj-AJMsc.js";import"./CollectionBuilder-Bvr2YvjZ.js";import"./SelectionIndicator-Ct_3iIN2.js";import"./Separator-BolqqnXN.js";import"./SelectionManager-BubBwhwk.js";import"./useEvent-Q3wTfOgv.js";import"./useCollator-Bwo3lAGD.js";import"./FocusScope-Biunv2Bw.js";import"./VisuallyHidden-CZJGc0hQ.js";import"./Switch-8tzPEpcN.js";import"./useFieldComponent-DWG920Yi.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DB2KzHpS.js";import"./useFormReset-DwvZDjIx.js";import"./OverlayTrigger-By5gsgrK.js";import"./DialogTriggerView-BgbzKeH9.js";import"./Overlay-Cm4iSrhW.js";import"./ButtonView-H4guPIkA.js";import"./Flex-OD7cZyUJ.js";import"./Heading-CVLd5xWO.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
