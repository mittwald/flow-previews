import{j as r}from"./iframe-Pk_Kk4JL.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-BZbEOivs.js";import{L as m}from"./Link-1JSdLWw6.js";import{H as s}from"./HeaderNavigation-CHGLqD26.js";import{B as o}from"./Button-D9QX6l1e.js";import{T as p}from"./Text-yAUoHBmv.js";import{I as h}from"./Image-C0mImCaU.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CKA31q0Q.js";import{C as M,M as c}from"./ContextMenu-CiFQ-zky.js";import{C as I}from"./ContextMenuTrigger-CxKtmIZb.js";import"./ContextMenuSection-C_1sxa8j.js";import{a as T,M as k}from"./Modal-C5LW9SwY.js";import{H}from"./Heading-wNCcNm7o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-c6eRnhhg.js";import"./index-Cry2UgUa.js";import"./index-BO3AnCjb.js";import"./remote-jZTk_Znj.js";import"./useLocalizedStringFormatter-DWczizNw.js";import"./context-CrHSUJ76.js";import"./utils-CLxMEgR2.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BhJiygMU.js";import"./useFocus-CG8bKOp6.js";import"./useFocusRing-Cf40KqTj.js";import"./useFocusable-6mL9jMN5.js";import"./dynamic-I4mA0X6x.js";import"./LoadingSpinner-DPjJtv8A.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CmNC7e_S.js";import"./ProgressBar-R9Q052Y1.js";import"./Label-BhzG_WzN.js";import"./Hidden-D3BnJIdN.js";import"./useLabel-C5txBCfY.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DxGxcnNA.js";import"./EmulatedBoldText-B0MH6cxw.js";import"./Text-cuBcImQE.js";import"./AlertIcon-BQAdHRLg.js";import"./Switch-B9h3ZjDI.js";import"./useFieldComponent-T3_INYSJ.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D0fCEfqb.js";import"./useFormReset-bAhSNWNb.js";import"./useControlledState-48Ld73MP.js";import"./VisuallyHidden-DaiW9JEZ.js";import"./Dialog-hqEaC_v2.js";import"./RSPContexts-DW-Mep96.js";import"./OverlayArrow-CX4Z7_7Y.js";import"./Collection-BHxA-DrM.js";import"./CollectionBuilder-DoPbpSH9.js";import"./SelectionIndicator-yei3WI6a.js";import"./Separator-BBzznqX8.js";import"./SelectionManager-BkRtV5Co.js";import"./useEvent-CPz9WXw8.js";import"./useCollator-Doi6oCed.js";import"./FocusScope-CxdKQmWN.js";import"./Action-C8SSnKxx.js";import"./context-DgSiNkYd.js";import"./useStatic-i-ZCX3ob.js";import"./getActionGroupSlot-CPzpUO6W.js";import"./Popover-CNf49oKt.js";import"./useOverlayController-C-ffow-t.js";import"./OverlayContextProvider-FOEyue6v.js";import"./OverlayTrigger-C6V65Cj9.js";import"./DialogTriggerView-DOtuJtGs.js";import"./Overlay-CthK8Mzz.js";import"./ButtonView-22oYLQp2.js";import"./Flex-CEXF9Y1S.js";import"./Heading-CHcXaZb2.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,zr as __namedExportsOrder,wr as default};
