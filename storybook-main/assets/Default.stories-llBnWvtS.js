import{j as r}from"./iframe-DwsGXJVG.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Ci9l-8b2.js";import{L as m}from"./Link-JCbSZI1O.js";import{H as s}from"./HeaderNavigation-BtLGVHao.js";import{B as o}from"./Button-CqL_vLUu.js";import{T as p}from"./Text-BV6qM8pO.js";import{I as h}from"./Image-C81S4_hw.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BkYwlH5l.js";import{C as M,M as c}from"./MenuItem-DvC4nW_N.js";import{C as I}from"./ContextMenuTrigger-BPepEjoh.js";import"./ContextMenuSection-X-b9aW1Y.js";import{M as T}from"./ModalTrigger-q_9RXsiB.js";import{M as k}from"./Modal-BWobx_T-.js";import{H}from"./Heading-BKffDfDn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-qxgtoIlH.js";import"./index-Bl29J3nk.js";import"./index-Z94wDe_B.js";import"./remote-Co6v5gQ1.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./context-aVGfmL8k.js";import"./utils-DRn9wprx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DIaiJ-NX.js";import"./usePress-CckbZpi5.js";import"./useFocusRing-DdmspiUG.js";import"./useFocusable-s83SGTZ-.js";import"./dynamic-CY6fGUGp.js";import"./LoadingSpinner-DKEuwZ4C.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-m4IzIabh.js";import"./ProgressBar-C9wD8OqZ.js";import"./Label-C5wfq0Kb.js";import"./Hidden-CJnCNBv0.js";import"./useLabel-DGPoQV-x.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Cz_VorJk.js";import"./EmulatedBoldText-C-itzyky.js";import"./Text-_i5SHi6c.js";import"./AlertIcon-BhWII3Mz.js";import"./ActionBatch-CjTnBW9C.js";import"./useOverlayController-Bn3a-KRG.js";import"./useStatic-BwWlrMEh.js";import"./getActionGroupSlot-BRP57hZk.js";import"./Popover-Cvxhvr4i.js";import"./OverlayContextProvider-CCF5PYOf.js";import"./Dialog-M15I_L87.js";import"./RSPContexts-CFeGdYTg.js";import"./OverlayArrow-DURPAUST.js";import"./useControlledState-CRB4bW25.js";import"./Collection-BGu_nwcH.js";import"./CollectionBuilder-B17IJuT1.js";import"./SelectionIndicator-BqSVIa4a.js";import"./Separator-BaZLZFLd.js";import"./SelectionManager-TlInvFTF.js";import"./useEvent-nJ48QMBy.js";import"./useCollator-GdkhHcGA.js";import"./FocusScope-4Fd3tZfM.js";import"./VisuallyHidden-Fvx90J8z.js";import"./Switch-BlCGn0Qm.js";import"./useFieldComponent-BobnjoTA.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DlDrxqdX.js";import"./useFormReset-hk4HwqV2.js";import"./OverlayTrigger-t2QYWnlS.js";import"./DialogTriggerView-DeaSBX2q.js";import"./Overlay-BTIksBpa.js";import"./ButtonView-CH2jD_Y9.js";import"./Flex-CPs0qh3k.js";import"./Heading-CsVZ9AEI.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
