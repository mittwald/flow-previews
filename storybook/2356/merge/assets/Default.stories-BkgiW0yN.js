import{j as r}from"./iframe-1Z6hWL0q.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-CstRa6-6.js";import{L as m}from"./Link-hyXaXYHi.js";import{H as s}from"./HeaderNavigation-DLn8R654.js";import{B as o}from"./Button-Up8_TRdV.js";import{T as p}from"./Text-NSg919ow.js";import{I as h}from"./Image-DSqzcNt2.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CeUEcGAO.js";import{C as M,M as c}from"./MenuItem-CmS-crKu.js";import{C as I}from"./ContextMenuTrigger-0qkKxpGM.js";import"./ContextMenuSection-DH07SvAX.js";import{M as T}from"./ModalTrigger-DiW7eDvE.js";import{M as k}from"./Modal-DHg5t4ae.js";import{H}from"./Heading-Dc2YOm8x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CQSqsFz-.js";import"./index-CPV4-njg.js";import"./index-OoNE8c9e.js";import"./remote-BXzLQ_GS.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./context-DCww6zBl.js";import"./utils-B0Ub4KXD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-MFE9JzzM.js";import"./usePress-Bgz5j4W3.js";import"./useFocusRing-EnMEiTgA.js";import"./useFocusable-BrwqamRV.js";import"./dynamic-CeVErRgL.js";import"./LoadingSpinner-B9ElqUFv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DpyZuV_i.js";import"./ProgressBar-BV7ioShA.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./useLabel-B8l-Wr5R.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-OyZXUgp8.js";import"./EmulatedBoldText-CsGTmPK_.js";import"./Text-DPhytgE2.js";import"./AlertIcon-Blha7MMy.js";import"./ActionBatch-B4cDzNNZ.js";import"./useOverlayController-zDyCyx1O.js";import"./useStatic-BMrg-KZz.js";import"./getActionGroupSlot-jkvbnKjz.js";import"./Popover-CCF5Rtw1.js";import"./OverlayContextProvider-BlmnF6zY.js";import"./Dialog-BOSurAfE.js";import"./RSPContexts-BZtvqclp.js";import"./OverlayArrow-0_UUlvtG.js";import"./useControlledState-DfFBi8JJ.js";import"./Collection-5lvTrIT4.js";import"./CollectionBuilder-zke4D84b.js";import"./SelectionIndicator-CEn-3elL.js";import"./Separator-CYJUtDva.js";import"./SelectionManager-CPzu3hBL.js";import"./useEvent-B2NydoIp.js";import"./useCollator-wpyuYlTN.js";import"./FocusScope-Dlwlk6_J.js";import"./VisuallyHidden-CCJLIB7u.js";import"./Switch-B-VLBLW_.js";import"./useFieldComponent-DdzfuZRi.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Bf8yXfZi.js";import"./useFormReset-BI-pxd56.js";import"./OverlayTrigger-RBcMGmOK.js";import"./DialogTriggerView-DI898Azx.js";import"./Overlay-DFEnDYi7.js";import"./ButtonView-CzNSGQ0T.js";import"./Flex-Vk66B6a6.js";import"./Heading-BTDLHxEZ.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
