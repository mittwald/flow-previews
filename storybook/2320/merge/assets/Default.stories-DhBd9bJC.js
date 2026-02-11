import{j as r}from"./iframe-BRGIT6aC.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-7xibGY50.js";import{L as m}from"./Link-P7oQRvkg.js";import{H as s}from"./HeaderNavigation-BT7wxKp0.js";import{B as o}from"./Button-CQ_f9ZVl.js";import{T as p}from"./Text-RxDad6dn.js";import{I as h}from"./Image-BfX5pPp9.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DzpKHkA7.js";import{C as M,M as c}from"./MenuItem-CM9GbnOj.js";import{C as I}from"./ContextMenuTrigger-B5OChGBh.js";import"./ContextMenuSection-a8sl_NQx.js";import{a as T,M as k}from"./Modal-CqpyER2_.js";import{H}from"./Heading-CNwpEC1p.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gC5J80sd.js";import"./index-DCYGO5ln.js";import"./index-CrtVPr5B.js";import"./remote-B0Hk_38y.js";import"./useLocalizedStringFormatter-CVE6cVib.js";import"./context-C5al0DRJ.js";import"./utils-D-ssFu49.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Dz-IuM4k.js";import"./usePress-CGLZGzkl.js";import"./useFocusRing-B_bORcJM.js";import"./useFocusable-Bmr3Drft.js";import"./dynamic-DJEA9S0A.js";import"./LoadingSpinner-BjEAsOxv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BCc16_FM.js";import"./ProgressBar-BPYUxayd.js";import"./Label-Ba69oYDq.js";import"./Hidden-QhxhoagL.js";import"./useLabel-CWpJX9lW.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BYxlW31W.js";import"./EmulatedBoldText-D5rj6KVU.js";import"./Text-CBpyQBbE.js";import"./AlertIcon-DeOHvzVA.js";import"./Action-BloO9QUi.js";import"./context-Dnnfbmmg.js";import"./useStatic-3STTURCL.js";import"./getActionGroupSlot-C3tMCkBR.js";import"./Popover-D5tJ855F.js";import"./useOverlayController-BV2mbNRJ.js";import"./OverlayContextProvider-BehX_G0U.js";import"./Dialog-Bn341bnD.js";import"./RSPContexts-C-qF17sW.js";import"./OverlayArrow-DKDxu5eo.js";import"./useControlledState-C2xaeP2Y.js";import"./Collection-BF4bn4qW.js";import"./CollectionBuilder-DWlQHDS1.js";import"./SelectionIndicator-BbWx7qoh.js";import"./Separator-mcbTnTQA.js";import"./SelectionManager-Ccyvg52a.js";import"./useEvent-C0jUKnCT.js";import"./useCollator-B5DUtkng.js";import"./FocusScope-D2KgIyLw.js";import"./VisuallyHidden-Cs58q5Qj.js";import"./Switch-CKKz4OC7.js";import"./useFieldComponent-CMRD4Pyo.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-dIE2ZRmt.js";import"./useFormReset-CXZmek7W.js";import"./OverlayTrigger-DrqrLZow.js";import"./DialogTriggerView-DbcsdXfQ.js";import"./Overlay-D_BChutz.js";import"./ButtonView-Cu_PLq3T.js";import"./Flex-D3NrXi4r.js";import"./Heading-er7MPh1O.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
