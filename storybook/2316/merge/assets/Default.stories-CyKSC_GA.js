import{j as r}from"./iframe-BWSm23JV.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-R37DsKRA.js";import{L as m}from"./Link-Ds_JHS0k.js";import{H as s}from"./HeaderNavigation-D4m-XXM7.js";import{B as o}from"./Button-B45r898z.js";import{T as p}from"./Text-BaJ5HEnd.js";import{I as h}from"./Image-C_z43skv.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Cq-g2fTe.js";import{C as M,M as c}from"./MenuItem-jg1ytzsQ.js";import{C as I}from"./ContextMenuTrigger-CtGU2YVF.js";import"./ContextMenuSection-DuWXEO2a.js";import{a as T,M as k}from"./Modal-CK9pPbGs.js";import{H}from"./Heading-0Lq3KVQb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-JjUcob8a.js";import"./index-dkn6ScVQ.js";import"./index-D0YiHBOl.js";import"./remote-DcEXMbRM.js";import"./useLocalizedStringFormatter-BKZxLutv.js";import"./context-4oRtfVxK.js";import"./utils-Dla7ZNEN.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CrlSoDhl.js";import"./usePress-C_E4YsZw.js";import"./useFocusRing-CI0bGTjl.js";import"./useFocusable-7cwTszGB.js";import"./dynamic-WPTM_TAt.js";import"./LoadingSpinner-CWXG4qcN.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DWVSyZOa.js";import"./ProgressBar-CVcTQ1yy.js";import"./Label--12nIVsO.js";import"./Hidden-C-tiV80t.js";import"./useLabel-C6wIzqCz.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-S_Q3Hufb.js";import"./EmulatedBoldText-Bqi8zNtS.js";import"./Text-DreghWw5.js";import"./AlertIcon-CwdoSZHL.js";import"./Action-cxW9JZWQ.js";import"./context-DzxYIN56.js";import"./useStatic-B14v8lYB.js";import"./getActionGroupSlot-BXCkrZKT.js";import"./Popover-BA8B3sEd.js";import"./useOverlayController-dPOs3tXC.js";import"./OverlayContextProvider-Bxu2XFRl.js";import"./Dialog-uisnl94N.js";import"./RSPContexts--whDujQs.js";import"./OverlayArrow-Lv31M_SN.js";import"./useControlledState-BdTYoDdO.js";import"./Collection-7HXUzyj9.js";import"./CollectionBuilder-CIbQ3PZQ.js";import"./SelectionIndicator-2rIWK9av.js";import"./Separator-7FCd2LVI.js";import"./SelectionManager-CahjVjpE.js";import"./useEvent-BAiWPb0X.js";import"./useCollator-68O4Bddb.js";import"./FocusScope-C7G-5g6h.js";import"./VisuallyHidden-BTdnLv2k.js";import"./Switch-DNbMghBK.js";import"./useFieldComponent-Cr8cfCaw.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D9SqIMbN.js";import"./useFormReset-DeveCpy2.js";import"./OverlayTrigger-Cn0zy4Sq.js";import"./DialogTriggerView-CZXtuFO6.js";import"./Overlay-B9yypXcx.js";import"./ButtonView-CajacAb0.js";import"./Flex-m0RWMY7s.js";import"./Heading-Cs-78oPS.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
