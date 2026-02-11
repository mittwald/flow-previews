import{j as r}from"./iframe-D8EpHgnQ.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-lLcAh7ID.js";import{L as m}from"./Link-CGpRENKt.js";import{H as s}from"./HeaderNavigation-CjVNajpP.js";import{B as o}from"./Button-v3XDTDQm.js";import{T as p}from"./Text-Dkvkf5JK.js";import{I as h}from"./Image-TLyItvOn.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DdONVude.js";import{C as M,M as c}from"./MenuItem-BXQZwjkt.js";import{C as I}from"./ContextMenuTrigger-DMWWmn2g.js";import"./ContextMenuSection-Bk-U6hYN.js";import{a as T,M as k}from"./Modal-BptZk_OJ.js";import{H}from"./Heading-DbO5EpaN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DshXN_wf.js";import"./index-eO8RjZh1.js";import"./index-CTAMatFU.js";import"./remote-DkgoZmNz.js";import"./useLocalizedStringFormatter-DVql_2Gh.js";import"./context-XjBPUYFu.js";import"./utils-DUD9ssEU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BoCERcfz.js";import"./usePress-CilZkf8w.js";import"./useFocusRing-DyG-PWur.js";import"./useFocusable-BTi6De5a.js";import"./dynamic-DBeHUKte.js";import"./LoadingSpinner-BgyqdyMI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Kox0tnC0.js";import"./ProgressBar-CUBLGiqw.js";import"./Label-Dl__ymiy.js";import"./Hidden-BjTu0qYx.js";import"./useLabel-oxfSZqnP.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CYlhW0g_.js";import"./EmulatedBoldText-1uP-q_AR.js";import"./Text-BH6HQaIi.js";import"./AlertIcon-Dtjl7KDj.js";import"./Action-Bqe5nSI1.js";import"./context-CfNS10y1.js";import"./useStatic-BaYU_ZGV.js";import"./getActionGroupSlot-cFKfTxwG.js";import"./Popover-BAHX_8HU.js";import"./useOverlayController-0DhE6nST.js";import"./OverlayContextProvider-BwUSFJyo.js";import"./Dialog-CkEWxlO6.js";import"./RSPContexts-D9_YYEmh.js";import"./OverlayArrow-Dy1GJrBM.js";import"./useControlledState-XjABDLiW.js";import"./Collection-tHQuiu82.js";import"./CollectionBuilder-DEptz4hs.js";import"./SelectionIndicator-DYxlXw3H.js";import"./Separator-HrrYEwzP.js";import"./SelectionManager-DHCb6qwA.js";import"./useEvent-BJb2xoQw.js";import"./useCollator-BLLhI1Uc.js";import"./FocusScope-2M3u1eHn.js";import"./VisuallyHidden-maxPxeqi.js";import"./Switch-Cw8-26Pv.js";import"./useFieldComponent-gPWDO_C1.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D5_w_6aq.js";import"./useFormReset-DtPxpP1_.js";import"./OverlayTrigger-Df6W5haQ.js";import"./DialogTriggerView-DVLpYSIx.js";import"./Overlay-BdPkk5f_.js";import"./ButtonView-CR_WR_Xo.js";import"./Flex-D4Wl2JkY.js";import"./Heading-sCjlRmAM.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
