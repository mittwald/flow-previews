import{j as r}from"./iframe-DQPKoo92.js";import{q as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CpLICj99.js";import{L as m}from"./Link-CBwHAhWI.js";import{H as s}from"./HeaderNavigation-CSzbidon.js";import{B as o}from"./Button-0l0f_jx8.js";import{T as p}from"./Text-C51WlGhJ.js";import{I as h}from"./Image-DY_5YSM4.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DnXJLhBx.js";import{C as M,M as c}from"./ContextMenu-Cq3N6-Xr.js";import{C as I}from"./ContextMenuTrigger-D6s63vmk.js";import"./ContextMenuSection-BCwogbjE.js";import{a as T,M as k}from"./Modal-DOu43Gm8.js";import{H}from"./Heading-BY6Bbsl0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVIe49dZ.js";import"./index-B3Bpj3GD.js";import"./index-CnP3WCIP.js";import"./remote-BNYVvti7.js";import"./useLocalizedStringFormatter-CbBU4IdI.js";import"./context-CJqjcP4U.js";import"./utils-XAdJPTNp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BE88ppMu.js";import"./usePress-ByCBMVLm.js";import"./useFocusRing-Cni30Eah.js";import"./useFocusable-DX4YK8A-.js";import"./dynamic-DGh7GyZ8.js";import"./LoadingSpinner-B8goxKJR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7sB4TeW.js";import"./ProgressBar-Cy5AjeoP.js";import"./Label-DrxyNCZO.js";import"./Hidden-BalHJt_t.js";import"./useLabel-DkBHutKV.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-ChlnFVHS.js";import"./EmulatedBoldText-ZCYLfeIO.js";import"./Text-Y949w0K8.js";import"./AlertIcon-v4rlNZlK.js";import"./Switch-CyaVKusJ.js";import"./useFieldComponent-BKiBq2W6.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DZJkqNce.js";import"./useFormReset-C7RuWveb.js";import"./useControlledState-CudIhSdL.js";import"./VisuallyHidden-Dk42l2-2.js";import"./Dialog-DjFTJjHY.js";import"./RSPContexts-C1KLf5C0.js";import"./OverlayArrow-CG2s7j2J.js";import"./Collection-YBemO0n0.js";import"./CollectionBuilder-n6Ro7SqS.js";import"./SelectionIndicator-DugKwRvD.js";import"./Separator-CC-j5b8u.js";import"./SelectionManager-0yrNUuw-.js";import"./useEvent-CfqveZ0P.js";import"./useCollator-BoFTkl_Q.js";import"./FocusScope-CJXytNJ4.js";import"./Action-DXbaOV3K.js";import"./context-Fi_0LQNU.js";import"./useStatic-AmwUmW1y.js";import"./getActionGroupSlot-BNoomJEc.js";import"./Popover-BWekKAiU.js";import"./useOverlayController-C_B26ZeO.js";import"./OverlayContextProvider-CDaDnEoz.js";import"./OverlayTrigger-BTPrK45t.js";import"./DialogTriggerView-BMS7lb0q.js";import"./Overlay-CzLMEg6z.js";import"./ButtonView-BJjz2IGv.js";import"./Flex-A_VapHqa.js";import"./Heading-CRkNhhGs.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,Zr as default};
