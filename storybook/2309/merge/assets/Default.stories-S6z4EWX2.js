import{j as r}from"./iframe-CnD5cTjE.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-K8fT7_bQ.js";import{L as m}from"./Link-DgqwpCbC.js";import{H as s}from"./HeaderNavigation-D7cP8H8y.js";import{B as o}from"./Button-CxHLWJvy.js";import{T as p}from"./Text-Bqsx-GQX.js";import{I as h}from"./Image-CSnWJcnV.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DiuA1sOs.js";import{C as M,M as c}from"./MenuItem-BJ9fGnWo.js";import{C as I}from"./ContextMenuTrigger-DuZKXeMF.js";import"./ContextMenuSection-BY-0yvA1.js";import{a as T,M as k}from"./Modal-jtR8x3ts.js";import{H}from"./Heading-B3KiVvm7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C-pFyTgk.js";import"./index-CFIaHCYn.js";import"./index-DPBNH-jw.js";import"./remote-CRObq-IF.js";import"./useLocalizedStringFormatter-C15HmRxb.js";import"./context-uSq5N7U7.js";import"./utils-BYl_EWK3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BZF2vaC7.js";import"./usePress-DgDG_638.js";import"./useFocusRing-a13YBJgG.js";import"./useFocusable-DUJmCsdq.js";import"./dynamic-DmWwIwdY.js";import"./LoadingSpinner-CMDtKY2z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bk4aZnIo.js";import"./ProgressBar-CtJNhI05.js";import"./Label-DvWkQRgL.js";import"./Hidden-BqUWSjHb.js";import"./useLabel-BEvZESWX.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DH0afsgD.js";import"./EmulatedBoldText-czAo41Rl.js";import"./Text-Bz5hHxMj.js";import"./AlertIcon-DEFExzLk.js";import"./Action-DYL0-s8C.js";import"./context-CRbXRYLt.js";import"./useStatic-CR0dXYGS.js";import"./getActionGroupSlot-C2C9nZKR.js";import"./Popover-BNLVWps9.js";import"./useOverlayController-DeY3Y9Ly.js";import"./OverlayContextProvider-CWXPLkIC.js";import"./Dialog-BpNR7iRs.js";import"./RSPContexts-AjJzFs_t.js";import"./OverlayArrow-W0sikX14.js";import"./useControlledState-C-7lgoXp.js";import"./Collection-CYQy112U.js";import"./CollectionBuilder-B9nA0J3q.js";import"./SelectionIndicator-T6p8Rrnn.js";import"./Separator-BpNHyh0k.js";import"./SelectionManager-C_EOkHGn.js";import"./useEvent-DjhegQC5.js";import"./useCollator-DdAAf0Bd.js";import"./FocusScope-q9RNJ1I3.js";import"./VisuallyHidden-D2K60xua.js";import"./Switch-CW0SD9Jj.js";import"./useFieldComponent-D1uM9aif.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CtDaAYsO.js";import"./useFormReset-DzGHPNTd.js";import"./OverlayTrigger-CQqJu3uy.js";import"./DialogTriggerView-Dr18Qd6j.js";import"./Overlay-BDAC3gwK.js";import"./ButtonView-Dbti4Nd6.js";import"./Flex-kKUvIewc.js";import"./Heading-BVBd8bpC.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
