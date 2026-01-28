import{j as r}from"./iframe-B-26223i.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-CfZm6euj.js";import{L as m}from"./Link-BQLubbaG.js";import{H as s}from"./HeaderNavigation-DwQrvurk.js";import{B as o}from"./Button-B60fo84_.js";import{T as p}from"./Text-C25EED6m.js";import{I as h}from"./Image-Dwa1XvD9.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Q5gI0VPL.js";import{C as M,M as c}from"./ContextMenu-DWc5pZwk.js";import{C as I}from"./ContextMenuTrigger-Da1fN95X.js";import"./ContextMenuSection-EzbGflNa.js";import{a as T,M as k}from"./Modal-BVdapmSV.js";import{H}from"./Heading-BATksAHi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cm2ULMwR.js";import"./index-C96xSvbi.js";import"./index-CMj-JRml.js";import"./remote-CUr3PG4h.js";import"./useLocalizedStringFormatter-CHKosLk9.js";import"./context-B9n95xcZ.js";import"./utils-CprJ_klo.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DYSsUR82.js";import"./usePress-BlwAXRn7.js";import"./useFocusRing-DATGHg9y.js";import"./useFocusable-CRgLtiVg.js";import"./dynamic-DWm47R25.js";import"./LoadingSpinner-CNdw31t2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C9Zg0tM0.js";import"./ProgressBar-DwD1l90a.js";import"./Label-Ddb5Z1yf.js";import"./Hidden-BAuAU20u.js";import"./useLabel-DUREvcwl.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DNWQphaZ.js";import"./EmulatedBoldText-Co4v7GV8.js";import"./Text-CrdzXlCc.js";import"./AlertIcon-Bi7YC7dH.js";import"./Switch-CURBIfIR.js";import"./useFieldComponent-eul3OsXk.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CI32NFO7.js";import"./useFormReset-BQreYCpE.js";import"./useControlledState-CCY4nzRh.js";import"./VisuallyHidden-DpBOnOEH.js";import"./Dialog-COoPEj_z.js";import"./RSPContexts-Braq8AdO.js";import"./OverlayArrow-Cnkc5XCY.js";import"./Collection-DFxwbH7P.js";import"./CollectionBuilder-BqJ1MbN-.js";import"./SelectionIndicator-DrGDjKtL.js";import"./Separator-Bc4LdP2j.js";import"./SelectionManager-BbjsNIkI.js";import"./useEvent-C1z2hzAA.js";import"./useCollator-cEvXopFB.js";import"./FocusScope-BG92zKg5.js";import"./Action-CKtvTujB.js";import"./context-JKAIHclB.js";import"./useStatic-DyURBROl.js";import"./getActionGroupSlot-BO_i0UUK.js";import"./Popover-iofx4eop.js";import"./useOverlayController-Bd-vbTeq.js";import"./OverlayContextProvider-DL8WNCgz.js";import"./OverlayTrigger-DHG4FXf-.js";import"./DialogTriggerView-BCzpwRou.js";import"./Overlay-69AJmP56.js";import"./ButtonView-N6QWot1B.js";import"./Flex-DFcUVKws.js";import"./Heading-BVbzfdRb.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
