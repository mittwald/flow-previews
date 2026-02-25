import{j as r}from"./iframe-PZSwL5UI.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Brl3hUMe.js";import{L as m}from"./Link-sMsqPXw3.js";import{H as s}from"./HeaderNavigation-jJZAizQr.js";import{B as o}from"./Button-Dx8ytIXV.js";import{T as p}from"./Text-CkpR2hqn.js";import{I as h}from"./Image-CBAsRPIp.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DkdidpBe.js";import{C as M,M as c}from"./MenuItem-C0bB-Fyc.js";import{C as I}from"./ContextMenuTrigger-Ca2zwc8B.js";import"./ContextMenuSection-B4TWz5w1.js";import{M as T}from"./ModalTrigger-BMzPGO3E.js";import{M as k}from"./Modal-C7FSQX3Q.js";import{H}from"./Heading-DkYLS7Fi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B2U-3AiS.js";import"./index-xzvR7-Gw.js";import"./index-Da7vmrj1.js";import"./remote-mdYu2fN6.js";import"./useLocalizedStringFormatter-DRymnkwE.js";import"./context-Ff7U_4vz.js";import"./utils-lOj21ZD_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BI7y428A.js";import"./usePress-B1ZCcdw8.js";import"./useFocusRing-C-2IcVPM.js";import"./useFocusable-B4WRTgkS.js";import"./dynamic-DDVyub9n.js";import"./LoadingSpinner-kHlSwNnH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQZ9yYEV.js";import"./ProgressBar-CH3LzA0o.js";import"./Label-e4m8Xdvz.js";import"./Hidden-0gux2v4t.js";import"./useLabel-N6JTHu_p.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Ds1bEyov.js";import"./EmulatedBoldText-CuqW50TP.js";import"./Text-BG-2dzKS.js";import"./AlertIcon-BtM4zuia.js";import"./ActionBatch-KmZgQ_FO.js";import"./useOverlayController-BVZAJrcY.js";import"./useStatic-Bw6k9Sf5.js";import"./getActionGroupSlot-Dj7srP7C.js";import"./Popover-sNv2wezL.js";import"./OverlayContextProvider-DVB3ck2o.js";import"./Dialog-BxivZnjn.js";import"./RSPContexts-TcotrMre.js";import"./OverlayArrow-Cvgp3jMH.js";import"./useControlledState-DIXXzqms.js";import"./Collection-D6QzoLja.js";import"./CollectionBuilder-o3rgBYyM.js";import"./SelectionIndicator-CKNEQhdD.js";import"./Separator-DApvHFcW.js";import"./SelectionManager-D57zfRFA.js";import"./useEvent-WDBpmbG3.js";import"./useCollator-DzxVKGp5.js";import"./FocusScope-BkNZ8LpG.js";import"./VisuallyHidden-UxX7HzEl.js";import"./Switch-DNzaYbla.js";import"./useFieldComponent-BUmkKSsK.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DZx5qkov.js";import"./useFormReset-DtrcblTn.js";import"./OverlayTrigger-w9ToWuXF.js";import"./DialogTriggerView-Bw9FK_tO.js";import"./Overlay-DZSkN4bv.js";import"./ButtonView-XkIAqQ4n.js";import"./Flex-Bs1WbtgB.js";import"./Heading-DxHx-m9x.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
