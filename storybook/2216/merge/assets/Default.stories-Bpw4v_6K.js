import{j as r}from"./iframe-d8TPt7Dq.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-BBwUIuFu.js";import{L as m}from"./Link-BAvXncIq.js";import{H as s}from"./HeaderNavigation-B0Tkdc2v.js";import{B as o}from"./Button-CG9B_DsC.js";import{T as p}from"./Text-B_83j2CJ.js";import{I as h}from"./Image-B0n3ncS1.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DysVh_oa.js";import{C as M,M as c}from"./MenuItem-DAc4qa1N.js";import{C as I}from"./ContextMenuTrigger-ChNDJbGG.js";import"./ContextMenuSection-BGdNAGXU.js";import{a as T,M as k}from"./Modal-QZgEJVC2.js";import{H}from"./Heading-DEdgyyg2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./index-hNZo4M03.js";import"./remote-DqOJ-OtV.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./context-s9WFa2xd.js";import"./utils-CQWCrNEN.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DD6hZDmw.js";import"./useFocus-Dzzsimxq.js";import"./useFocusRing-Pl_83XSU.js";import"./useFocusable-Blyv-8JB.js";import"./dynamic-q6Z3lF5f.js";import"./LoadingSpinner-CZkvTSmf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CiuUFhcg.js";import"./ProgressBar-DbAphBhf.js";import"./Label-Ddce6lPW.js";import"./Hidden-DwOTALl4.js";import"./useLabel-CyX9DgZ-.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Cq89yPle.js";import"./EmulatedBoldText-Dx_IZKf8.js";import"./Text-CbFZ93_1.js";import"./AlertIcon-vcoq1kIC.js";import"./Action-BNptIGGg.js";import"./context-BnRBG3H-.js";import"./useStatic-C-4yNygp.js";import"./getActionGroupSlot-BPC2rtYu.js";import"./Popover-2QFTEP9U.js";import"./useOverlayController-BtkV8MPK.js";import"./OverlayContextProvider-CEYLfIDU.js";import"./Dialog-DKAUR0i0.js";import"./RSPContexts-Bn3c_trp.js";import"./OverlayArrow-DsjdeIno.js";import"./useControlledState-Du7Hq4ap.js";import"./Collection-C_DIbhIS.js";import"./CollectionBuilder-DWjCGULS.js";import"./SelectionIndicator-Tc2ddoNh.js";import"./Separator-CfU7skaS.js";import"./SelectionManager-CwYh5ako.js";import"./useEvent-BEdiQQE9.js";import"./useCollator-BT1LDj3M.js";import"./FocusScope-TlUkqt74.js";import"./VisuallyHidden-_OGl7ay2.js";import"./Switch-VCLSLfaM.js";import"./useFieldComponent-XccPD61N.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-MqcjNIYZ.js";import"./useFormReset-AO5_sbxL.js";import"./OverlayTrigger-Ct0MwRjl.js";import"./DialogTriggerView-CYPUNNhr.js";import"./Overlay-CRp8Vgy3.js";import"./ButtonView-DdC416-T.js";import"./Flex-CCpasJD2.js";import"./Heading-DHpEgmIr.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
