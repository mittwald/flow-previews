import{j as r}from"./iframe-CnrbHwTe.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-DgLNPfaL.js";import{L as m}from"./Link-DNUeLtma.js";import{H as s}from"./HeaderNavigation-C-LZKTAn.js";import{B as o}from"./Button-DoJYz9nf.js";import{T as p}from"./Text-eTz9hgbN.js";import{I as h}from"./Image-CzwlVzga.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Ce-jaDT0.js";import{C as M,M as c}from"./MenuItem-BYe6H14B.js";import{C as I}from"./ContextMenuTrigger-CDkRQJws.js";import"./ContextMenuSection-JoSq6Aah.js";import{a as T,M as k}from"./Modal-B4krUd9Y.js";import{H}from"./Heading-4nCu50xU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aR3apKPq.js";import"./index-Cg95cP60.js";import"./index-CUZGjyPT.js";import"./remote-CmycR9zC.js";import"./useLocalizedStringFormatter-CyCvm50e.js";import"./context-B7MLny9I.js";import"./utils-r4y_43wh.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DoQNUybf.js";import"./useFocus-CW3ebFsS.js";import"./useFocusRing-CRQTw2D7.js";import"./useFocusable-DrwEzR41.js";import"./dynamic-D-DaJWqs.js";import"./LoadingSpinner-BfrmZLfO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CDvqfYYW.js";import"./ProgressBar-VG7_xCrZ.js";import"./Label-BQw60TG0.js";import"./Hidden-kZWiQEu_.js";import"./useLabel-Dn56kI8F.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-TZQakXKU.js";import"./EmulatedBoldText-B4gWqNJ7.js";import"./Text-nMrjd92_.js";import"./AlertIcon-kkftxocV.js";import"./Action-Csai7jBT.js";import"./context-BuaNu4Hn.js";import"./useStatic-D1Vs9fsX.js";import"./getActionGroupSlot-C6hg9FJg.js";import"./Popover-tLLFCijH.js";import"./useOverlayController-CZACBNcH.js";import"./OverlayContextProvider-DyMWHvaJ.js";import"./Dialog-CsKt9ioo.js";import"./RSPContexts-CU1Sv8RV.js";import"./OverlayArrow-CJqqEQZv.js";import"./useControlledState-CcfbhOaY.js";import"./Collection-Djv1d9Z_.js";import"./CollectionBuilder-BkOVJAZN.js";import"./SelectionIndicator-CTBQmwrG.js";import"./Separator-D2suaWuM.js";import"./SelectionManager-dddCba2a.js";import"./useEvent-Diyat4Qa.js";import"./useCollator-aieXWn7K.js";import"./FocusScope-CJbwLE5j.js";import"./VisuallyHidden-DYF5WgrZ.js";import"./Switch-DCK5k0l0.js";import"./useFieldComponent-DrIyQ-Oz.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-iYimYvHh.js";import"./useFormReset-n7eHOhOu.js";import"./OverlayTrigger-QfzKXgOG.js";import"./DialogTriggerView-Dr6pD7sv.js";import"./Overlay-DGr8g2Vn.js";import"./ButtonView-DIEJPe8r.js";import"./Flex-VSjIMNEq.js";import"./Heading-7TXA4VJI.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
