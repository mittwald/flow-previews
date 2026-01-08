import{j as r}from"./iframe-BpfR1GYm.js";import{t as d,a1 as l,_ as g,K as u,a2 as x}from"./IconWarning-BOf1a1NO.js";import{L as m}from"./Link-DvpRW4Me.js";import{H as s}from"./HeaderNavigation-BsOprL7x.js";import{B as o}from"./Button-C4OB0yac.js";import{T as p}from"./Text-jE0jlBS1.js";import{I as h}from"./Image-BR33_89l.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CE2Xl98h.js";import{C as M,M as c}from"./MenuItem-Bbm5yWmm.js";import{C as I}from"./ContextMenuTrigger-tIG1cR3j.js";import"./ContextMenuSection-DF0tWoMk.js";import{a as T,M as k}from"./Modal-XzYDh4Tt.js";import{H}from"./Heading-gFHdw-hu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-qov8JTe3.js";import"./index-SWV2Jto_.js";import"./index-BNT5TWiv.js";import"./remote-Cr2dkfGH.js";import"./useLocalizedStringFormatter-BHDvTpyt.js";import"./context-BQnsf3fS.js";import"./utils-z0hzRCNL.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-VEcsoWoE.js";import"./useFocus-ZHbPEGRJ.js";import"./useFocusRing-lHZkZ90J.js";import"./useFocusable-CybXUwCv.js";import"./dynamic-B2LUuPCk.js";import"./LoadingSpinner-C50Cnz5-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dq2UVXBx.js";import"./ProgressBar-C8HL_nLQ.js";import"./Label-TUuaFaku.js";import"./Hidden-DWXiMutX.js";import"./useLabel-oNP935J_.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CJuVe1n5.js";import"./EmulatedBoldText-Ba7yrIZA.js";import"./Text-DujklUHl.js";import"./AlertIcon-BPm48GUQ.js";import"./Action-BgYAV17K.js";import"./context-CfiW950r.js";import"./useStatic-C8Msussh.js";import"./getActionGroupSlot-DhmxW89Z.js";import"./Popover-D5ZxaFGN.js";import"./useOverlayController-D3DGUENW.js";import"./OverlayContextProvider-Df0cEgpx.js";import"./Dialog-B9wBOAXv.js";import"./RSPContexts-DDsKHTka.js";import"./OverlayArrow-CweGqLKW.js";import"./useControlledState-Bs2ReOE0.js";import"./Collection-YpU2JVsv.js";import"./CollectionBuilder-9PEIzLQk.js";import"./SelectionIndicator-n0OjLjyZ.js";import"./Separator-BrTPl_Ln.js";import"./SelectionManager-DNmOxeny.js";import"./useEvent-DNbaaWG3.js";import"./useCollator-C5z3r8b8.js";import"./FocusScope--j43gSQ5.js";import"./VisuallyHidden-Dk8KR5l4.js";import"./Switch-Dwa6M-EY.js";import"./useFieldComponent-DI1dsoTY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-bNqKXyCP.js";import"./useFormReset-LNCZiIDy.js";import"./OverlayTrigger-W5qY0Tf-.js";import"./DialogTriggerView-CVjEgKIM.js";import"./Overlay-Fal248l9.js";import"./ButtonView-BAFaUD0g.js";import"./Flex-DkwLwy1a.js";import"./Heading-BjKLoeTv.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
