import{j as r}from"./iframe-ByQojKkA.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-tVGTIzEo.js";import{L as m}from"./Link-QzLuDxqX.js";import{H as s}from"./HeaderNavigation-DnJoMKkz.js";import{B as o}from"./Button-DG0b__xZ.js";import{T as p}from"./Text-B1R6GgBU.js";import{I as h}from"./Image-Co3Dc10G.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D08OheC3.js";import{C as M,M as c}from"./MenuItem-BUokxg7n.js";import{C as I}from"./ContextMenuTrigger-4DXUxMOx.js";import"./ContextMenuSection-6SzjTnwS.js";import{a as T,M as k}from"./Modal-C8_LMoxY.js";import{H}from"./Heading-Cbba3Zbx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-finO9fDl.js";import"./index-bUDX88mR.js";import"./index-DifIgMrD.js";import"./remote-CpbK9d4g.js";import"./useLocalizedStringFormatter-EfbLvfF-.js";import"./context-B2MAxUi3.js";import"./utils-D3Fm7Ut8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CIqVesE-.js";import"./usePress-BwnADfjY.js";import"./useFocusRing-D8JCvm1f.js";import"./useFocusable-BRqzZMJF.js";import"./dynamic-G0P_JzfN.js";import"./LoadingSpinner-Dd1p82wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-psJerCAv.js";import"./ProgressBar-bE4oj_9I.js";import"./Label-Ca-ZH_hh.js";import"./Hidden-B7m2oWRR.js";import"./useLabel-BZ22SDLr.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BgQK0KeO.js";import"./EmulatedBoldText-CozfSoiL.js";import"./Text-BjqL4T8G.js";import"./AlertIcon-C-5STchL.js";import"./Action-D7dGsrUH.js";import"./context-Buk6ndZl.js";import"./useStatic-ClNGpIKI.js";import"./getActionGroupSlot-D7PQruO1.js";import"./Popover-VY_G-8Aw.js";import"./useOverlayController-DPyEBWrx.js";import"./OverlayContextProvider-jZUXkiaW.js";import"./Dialog-B4qMOx1Z.js";import"./RSPContexts-au40D8o8.js";import"./OverlayArrow-CZRwwumO.js";import"./useControlledState-CdOFY_9U.js";import"./Collection-B7VbOrxo.js";import"./CollectionBuilder-Bo0pSU7J.js";import"./SelectionIndicator-Bd5_QITD.js";import"./Separator-CVlXOjLN.js";import"./SelectionManager-C7xZcAD0.js";import"./useEvent-Dbu6PXWh.js";import"./useCollator-KAAcb033.js";import"./FocusScope-Df45VKi0.js";import"./VisuallyHidden-Bik_STlT.js";import"./Switch-DoxZw8o-.js";import"./useFieldComponent-Blt-XhY9.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Ctt2cCZ_.js";import"./useFormReset-CjuTJ3ym.js";import"./OverlayTrigger-Bd_tt0nJ.js";import"./DialogTriggerView-DhIKQXU9.js";import"./Overlay-DqSbMzS4.js";import"./ButtonView-B55WSwFj.js";import"./Flex-DH_VDsi9.js";import"./Heading-CW6fzv-T.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
