import{j as r}from"./iframe-BBX1MRm7.js";import{u as d,a1 as l,_ as g,y as u,a2 as x}from"./IconWarning-D1rdipwB.js";import{L as m}from"./Link-BQlGd_9b.js";import{H as s}from"./HeaderNavigation-mZGEctvV.js";import{B as o}from"./Button-BqkPfHUM.js";import{T as p}from"./Text-bZjB6G95.js";import{I as h}from"./Image-PMs_jxdS.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CjYFSQ5Z.js";import{C as M,M as c}from"./MenuItem-DjAOAz9U.js";import{C as I}from"./ContextMenuTrigger--sg0Xb-F.js";import"./ContextMenuSection-C-rpOjJk.js";import{a as T,M as k}from"./Modal-B7KLh8EF.js";import{H}from"./Heading-DWMQjpKC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-79ppapas.js";import"./index-BNLEYWOE.js";import"./index-CaVys9ny.js";import"./remote-DQSNjr8v.js";import"./useLocalizedStringFormatter-BVVru5D3.js";import"./context-CZSumH6g.js";import"./utils-BavrKavc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CEW7w8cP.js";import"./usePress-C19iJYYn.js";import"./useFocusRing-Bm9tRP_O.js";import"./useFocusable-DP1OjJqD.js";import"./dynamic-CGdtYp29.js";import"./LoadingSpinner-D7vBft_f.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BJia7Ggt.js";import"./ProgressBar-BlLvdox5.js";import"./Label-dmshrR3q.js";import"./Hidden-BWx-3ZWW.js";import"./useLabel-CwE3wslu.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-94--rh0I.js";import"./EmulatedBoldText-B_ZrZeLf.js";import"./Text-Dx1GcOD_.js";import"./AlertIcon-Bzw_XkQ4.js";import"./Action-NfMU4pZQ.js";import"./context-CbNZJEnz.js";import"./useStatic-eT6_SwdI.js";import"./getActionGroupSlot-Cs4GvwwL.js";import"./Popover-DfKYmgoY.js";import"./useOverlayController-UE1-I0TE.js";import"./OverlayContextProvider-CeB4MDIB.js";import"./Dialog-DxFT1h3e.js";import"./RSPContexts-Bzvj4RyS.js";import"./OverlayArrow-CEy0Lp_c.js";import"./useControlledState-hVcOsExM.js";import"./Collection-KvAmq1BM.js";import"./CollectionBuilder-CT5wpjPQ.js";import"./SelectionIndicator-BhUr7H-C.js";import"./Separator-CBat6_46.js";import"./SelectionManager-BqxHDxhn.js";import"./useEvent-9YiOq-bW.js";import"./useCollator-BBRvdoV2.js";import"./FocusScope-geYyY5OG.js";import"./VisuallyHidden-B0NnPUX1.js";import"./Switch-Do-NLtXd.js";import"./useFieldComponent-B_qWTKJx.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DCsKB4PK.js";import"./useFormReset--Sx8IrxJ.js";import"./OverlayTrigger-D5NXWXDN.js";import"./DialogTriggerView-D6p_RSh_.js";import"./Overlay-ynqiAGu1.js";import"./ButtonView-DtpzIIn9.js";import"./Flex-BGK2jBNu.js";import"./Heading-L9MMZJmE.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
