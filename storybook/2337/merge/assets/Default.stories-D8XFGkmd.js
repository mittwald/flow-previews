import{j as r}from"./iframe-DepdzLEL.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-DzJyip11.js";import{L as m}from"./Link-BC75pmN6.js";import{H as s}from"./HeaderNavigation-BOxnu07S.js";import{B as o}from"./Button-CNIywMH8.js";import{T as p}from"./Text-DQklyFH_.js";import{I as h}from"./Image-BRJATKYY.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BMKO7wRD.js";import{C as M,M as c}from"./MenuItem-BAI8GON0.js";import{C as I}from"./ContextMenuTrigger-QCL_t8W6.js";import"./ContextMenuSection-DuMO6oHS.js";import{M as T}from"./ModalTrigger-CJNebYez.js";import{M as k}from"./Modal-BbNl1Qkg.js";import{H}from"./Heading-BfiUETdQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-fKj6y8ty.js";import"./index-BsHBlgok.js";import"./index-QBVvmMGX.js";import"./remote-BQ4RO_kW.js";import"./useLocalizedStringFormatter-hW7UFah-.js";import"./context-BDIAQ50e.js";import"./utils-7tdA0jB4.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-ZpAuijkN.js";import"./usePress-BqHqHS4f.js";import"./useFocusRing-DGi1wLvD.js";import"./useFocusable-Cun53ew4.js";import"./dynamic-DyShJQHT.js";import"./LoadingSpinner-CFbq72U2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BTig9cwD.js";import"./ProgressBar-Db1s_185.js";import"./Label-DGPqobXV.js";import"./Hidden-Czdw4FHX.js";import"./useLabel-B2Boz_gi.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DxvLCkxH.js";import"./EmulatedBoldText-MhUupop4.js";import"./Text-CHX4WGB5.js";import"./AlertIcon-CRbLFRY9.js";import"./ActionBatch-CxGdjV-j.js";import"./useOverlayController-Br9LJhfN.js";import"./useStatic-D2N_z3eO.js";import"./getActionGroupSlot-DngwkT4-.js";import"./Popover-D-HE80pU.js";import"./OverlayContextProvider-FdKPEOKm.js";import"./Dialog-pPKxFXOM.js";import"./RSPContexts-C4BguXQB.js";import"./OverlayArrow-D9XOfekb.js";import"./useControlledState-BNsQxzmb.js";import"./Collection-CQf_iL2m.js";import"./CollectionBuilder-BRFKsZkG.js";import"./SelectionIndicator-D1BAj3_c.js";import"./Separator-Cs836uSa.js";import"./SelectionManager-Y4qgtYQ4.js";import"./useEvent-DIoFJeOI.js";import"./useCollator-MpcrCLx0.js";import"./FocusScope-C6Ou1N9_.js";import"./VisuallyHidden-msEuPEko.js";import"./Switch-CTtGRWsg.js";import"./useFieldComponent-PSzBC9V7.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-3lRe43ig.js";import"./useFormReset-BQp6BNc9.js";import"./OverlayTrigger-BeYMVPU4.js";import"./DialogTriggerView-C4EzYtrC.js";import"./Overlay-CViqvEV6.js";import"./ButtonView-DkAiozhy.js";import"./Flex-DV0RJgp7.js";import"./Heading-Dfg4FmbO.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
