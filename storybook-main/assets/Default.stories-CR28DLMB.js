import{j as r}from"./iframe-Q1VSciNm.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-Bp2wXPUs.js";import{L as m}from"./Link-BJjOeBY1.js";import{H as s}from"./HeaderNavigation-BluUSZ6d.js";import{B as o}from"./Button-BkL5LUHK.js";import{T as p}from"./Text-1lLVDQct.js";import{I as h}from"./Image-Cz34Aif6.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Fy0ozJT9.js";import{C as M,M as c}from"./ContextMenu-BhzDb78L.js";import{C as I}from"./ContextMenuTrigger-CEEkuu8R.js";import"./ContextMenuSection-DbRI5vVv.js";import{a as T,M as k}from"./Modal-CsAOkbTG.js";import{H}from"./Heading-D8FX4Qh8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CPW7r7fk.js";import"./index-CfXDE0zj.js";import"./index-C3b6LhZY.js";import"./remote-B8jFwJ6r.js";import"./useLocalizedStringFormatter-CLD0dVJV.js";import"./context-BLO98TmC.js";import"./utils-Cfx54F97.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CkY15rDX.js";import"./useFocus-Dgy1zF73.js";import"./useFocusRing-oK86YNHq.js";import"./useFocusable-BFiW_6Mc.js";import"./dynamic-B-3r4dJt.js";import"./LoadingSpinner-CTh5kqiZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-42pr8eMu.js";import"./ProgressBar-BibYjS7R.js";import"./Label-DHpNBk6c.js";import"./Hidden-XjRrgtIh.js";import"./useLabel-B4QM81Mz.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DUAAaQNQ.js";import"./EmulatedBoldText-Bq17Dbi4.js";import"./Text-FwHfWGj4.js";import"./AlertIcon-C25ddq9s.js";import"./Switch-CTaNfz3A.js";import"./useFieldComponent-1pDy4PKz.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Cf6vS_PZ.js";import"./useFormReset-C0YD-aRq.js";import"./useControlledState-Cr50bzxN.js";import"./VisuallyHidden-btJzxMJm.js";import"./Dialog-ib05FTRH.js";import"./RSPContexts-MtiuAHte.js";import"./OverlayArrow-vyusEtHs.js";import"./Collection-Dj4b01oP.js";import"./CollectionBuilder-D4fjBWoV.js";import"./SelectionIndicator-BJwzvmKN.js";import"./Separator-C0Z-5W1p.js";import"./SelectionManager-QcgbohAp.js";import"./useEvent-B6bvG52n.js";import"./useCollator-Dn5lVtzm.js";import"./FocusScope-BLxdUf1u.js";import"./Action-DYNAwBsP.js";import"./context-xTt93I09.js";import"./useStatic-DcS9SWFS.js";import"./getActionGroupSlot-gyV-83t6.js";import"./Popover-D68emFpc.js";import"./useOverlayController-CoiqP3F-.js";import"./OverlayContextProvider-y6JRCx08.js";import"./OverlayTrigger-DzAIUhz9.js";import"./DialogTriggerView-BrsBC3sY.js";import"./Overlay-Ce9kn2SH.js";import"./ButtonView-F6X_RkhP.js";import"./Flex-DMQpYTC7.js";import"./Heading-BIQD_zbY.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
