import{j as r}from"./iframe-CLDMeli7.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-p4W4x8Yn.js";import{L as m}from"./Link-D93xlOwJ.js";import{H as s}from"./HeaderNavigation-jZYzs-P0.js";import{B as o}from"./Button-BzVheXKP.js";import{T as p}from"./Text-CP7Ip6pC.js";import{I as h}from"./Image-B6ot2O7n.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BVG1pB6K.js";import{C as M,M as c}from"./MenuItem-C6vt10dx.js";import{C as I}from"./ContextMenuTrigger-44VHRqHU.js";import"./ContextMenuSection-BNGygWDz.js";import{a as T,M as k}from"./Modal-B_AMSUZg.js";import{H}from"./Heading-Cd0Jc4Sk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-oV-3iEWg.js";import"./index-qO7MtLeC.js";import"./index-9eDA9WpJ.js";import"./remote-B4IT0gy2.js";import"./useLocalizedStringFormatter-BL7vQ06a.js";import"./context-CJeO-2nS.js";import"./utils-CeJP1xg2.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DccW9XIs.js";import"./usePress-5-cRdm9R.js";import"./useFocusRing-D-0mJeTX.js";import"./useFocusable-B-HKy_Nj.js";import"./dynamic-CQUXTbxb.js";import"./LoadingSpinner-DoDeCRPK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DkOX4zii.js";import"./ProgressBar-DFW8NzQ8.js";import"./Label-CvZQpZvf.js";import"./Hidden-B_4q2AdF.js";import"./useLabel-BXv9j1Wx.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DchrXhwC.js";import"./EmulatedBoldText-B7dHFZ_g.js";import"./Text-Doo8ujkC.js";import"./AlertIcon-BgEbwDh4.js";import"./Action-B36_bDyV.js";import"./context-ZEvjkl_L.js";import"./useStatic-CZ7UkCej.js";import"./getActionGroupSlot-C0uwUGhO.js";import"./Popover-PjJ853r6.js";import"./useOverlayController-CfvFaHFD.js";import"./OverlayContextProvider-D58HtU5y.js";import"./Dialog-BqnORwX4.js";import"./RSPContexts-SpTJ-p__.js";import"./OverlayArrow-B5yP7TKG.js";import"./useControlledState-DtGWcuCb.js";import"./Collection-BC2ZOpJQ.js";import"./CollectionBuilder-CH8X2SMa.js";import"./SelectionIndicator-DBZDkcHI.js";import"./Separator-CSbFrQJI.js";import"./SelectionManager-Cf9boCVT.js";import"./useEvent-BRgO1QZf.js";import"./useCollator-CMIPrcXy.js";import"./FocusScope-CDi_kcpI.js";import"./VisuallyHidden--NZ_Ses-.js";import"./Switch-oaPEra7E.js";import"./useFieldComponent-BtEJhhry.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BJLDzOzG.js";import"./useFormReset-BkQU1ELB.js";import"./OverlayTrigger-BIW3wf-9.js";import"./DialogTriggerView-C5-Lvp2U.js";import"./Overlay-D2ajlAjM.js";import"./ButtonView-DsZzpVxf.js";import"./Flex-C6NkFTXj.js";import"./Heading-6_ezcD4u.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
