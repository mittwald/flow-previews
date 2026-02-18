import{j as r}from"./iframe-tDsAeGKm.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-DKvGabEh.js";import{L as m}from"./Link-D7bQunCc.js";import{H as s}from"./HeaderNavigation-CxBYWPYx.js";import{B as o}from"./Button-jRtlVENb.js";import{T as p}from"./Text-D5NMs6cZ.js";import{I as h}from"./Image-Cvm7NahU.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CxHJ-qVU.js";import{C as M,M as c}from"./MenuItem-C-CEAKIb.js";import{C as I}from"./ContextMenuTrigger-Dj0AVIR3.js";import"./ContextMenuSection-CLgK4tmh.js";import{M as T}from"./ModalTrigger-DWvLKH57.js";import{M as k}from"./Modal-Dcg0QJqD.js";import{H}from"./Heading-B57Tu_dh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BfLM0c2n.js";import"./index-bKgupbLj.js";import"./index-B9moyWSs.js";import"./remote-Dyxf39S8.js";import"./useLocalizedStringFormatter-Ble8CxqU.js";import"./context-B8HhXai5.js";import"./utils-DhX5ITDy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BJatrcMj.js";import"./usePress-DsHBwD0o.js";import"./useFocusRing-O-BrOcuV.js";import"./useFocusable-Dhs_EAwV.js";import"./dynamic-CfRao1zO.js";import"./LoadingSpinner-cVZxppZv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DSgsBLqC.js";import"./ProgressBar-cVZAXAEA.js";import"./Label-CtdEoG3D.js";import"./Hidden-S5GeLDqu.js";import"./useLabel-CvQ5_So8.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CATpO6nC.js";import"./EmulatedBoldText-B_3WWRWD.js";import"./Text-B29urVwj.js";import"./AlertIcon-BN6nSUvJ.js";import"./ActionBatch-Dcv9mfk6.js";import"./useOverlayController-B76T1UqF.js";import"./useStatic-BTV6Su7X.js";import"./getActionGroupSlot-BJCt2Jtz.js";import"./Popover-Dl9HCW3C.js";import"./OverlayContextProvider-BmYwjEIL.js";import"./Dialog-BchFx3yj.js";import"./RSPContexts-1mHRta2c.js";import"./OverlayArrow-dAx307tU.js";import"./useControlledState-DJUoNOP3.js";import"./Collection-DX3v8hJf.js";import"./CollectionBuilder-DauPrh3N.js";import"./SelectionIndicator-DonQVrOH.js";import"./Separator-C9Rj8Lhn.js";import"./SelectionManager-CvMALRTQ.js";import"./useEvent-DNMlHs6e.js";import"./useCollator-CjoGoE8F.js";import"./FocusScope-BLSD8gJZ.js";import"./VisuallyHidden-BeYtKSfy.js";import"./Switch-D5pIVFco.js";import"./useFieldComponent-CEijF59K.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DyfojBvq.js";import"./useFormReset-Bh0h9BrG.js";import"./OverlayTrigger-e7KCcZDP.js";import"./DialogTriggerView-CkHDJvb0.js";import"./Overlay-61YYNO6R.js";import"./ButtonView-1ef2c52x.js";import"./Flex-DaNMii4C.js";import"./Heading-DyHmtFkg.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
