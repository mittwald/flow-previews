import{j as r}from"./iframe-Cs0JkT9Q.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-wVjX2Q6D.js";import{L as m}from"./Link-Cm1yPu4S.js";import{H as s}from"./HeaderNavigation-D3Gl1uSB.js";import{B as o}from"./Button-BS2N-oft.js";import{T as p}from"./Text-l9LtklMs.js";import{I as h}from"./Image-Cq3V-r2y.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DgRZavF_.js";import{C as M,M as c}from"./MenuItem-ByadYx_2.js";import{C as I}from"./ContextMenuTrigger-D8C0yud5.js";import"./ContextMenuSection-RP0htgKT.js";import{a as T,M as k}from"./Modal-B4c_5EAH.js";import{H}from"./Heading-BKu6e9hA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DnhH9c8U.js";import"./index-CF0rrQKO.js";import"./index-BDmaB34G.js";import"./remote-bYaNzVPL.js";import"./useLocalizedStringFormatter-CQ-MJvxZ.js";import"./context-CtFpEE6p.js";import"./utils-BvIIGzqK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DNqIDWYA.js";import"./usePress-y02TS-RC.js";import"./useFocusRing-Cldy4Slr.js";import"./useFocusable-Cn5DQ2tI.js";import"./dynamic-DZ8udFFw.js";import"./LoadingSpinner-FnXgTY4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CoGTRo7z.js";import"./ProgressBar-CG2kSUer.js";import"./Label-CQSgfv4f.js";import"./Hidden-BvtrxWwl.js";import"./useLabel-CfslMsP4.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Cphwy2_f.js";import"./EmulatedBoldText-C1XQaUUR.js";import"./Text-Dd1xy9_M.js";import"./AlertIcon-Dko-1oCR.js";import"./Action-8KnSiAHu.js";import"./context-DmALYfE_.js";import"./useStatic-BOH6EX5_.js";import"./getActionGroupSlot-BG1YGDa-.js";import"./Popover-CCN0hkVy.js";import"./useOverlayController-Dl_TlRS7.js";import"./OverlayContextProvider-zlrNbl-W.js";import"./Dialog-n12IRs92.js";import"./RSPContexts-BDhxiX2p.js";import"./OverlayArrow-B2W5aB6f.js";import"./useControlledState-DrKGwN1m.js";import"./Collection-BVBA565q.js";import"./CollectionBuilder-BDz0phXE.js";import"./SelectionIndicator-36GmvFRO.js";import"./Separator-BWqNxSAD.js";import"./SelectionManager-DK8tNpRO.js";import"./useEvent-DfZ5FDj0.js";import"./useCollator-JQWc_WGD.js";import"./FocusScope-BXTpAFiu.js";import"./VisuallyHidden-BGmnCuXu.js";import"./Switch-BdcprqLR.js";import"./useFieldComponent-BGOnrhQA.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BiVAhfUT.js";import"./useFormReset-5IC1Q0ld.js";import"./OverlayTrigger-zQW25Tpm.js";import"./DialogTriggerView-DZ6tvxu4.js";import"./Overlay-faBlXFe5.js";import"./ButtonView-DtNenCUs.js";import"./Flex-BV2SfjnG.js";import"./Heading-eFVgN67f.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
