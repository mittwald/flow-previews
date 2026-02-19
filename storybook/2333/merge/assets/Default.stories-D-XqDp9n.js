import{j as r}from"./iframe-Cbm1tYQ5.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-HRESMERf.js";import{L as m}from"./Link-BAqQtX5j.js";import{H as s}from"./HeaderNavigation-CReqLN72.js";import{B as o}from"./Button-Cqfz7zcL.js";import{T as p}from"./Text-K6yu7K7n.js";import{I as h}from"./Image-Sc5pAFZ5.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DTM_v6Yb.js";import{C as M,M as c}from"./MenuItem-Dyb8LkJj.js";import{C as I}from"./ContextMenuTrigger-DAvanIE6.js";import"./ContextMenuSection-BbEgK5mq.js";import{M as T}from"./ModalTrigger-d35ZMIMH.js";import{M as k}from"./Modal-B7ggXlTZ.js";import{H}from"./Heading-DoywAf3I.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BdgFVdCI.js";import"./index-DnzctHoT.js";import"./index-cwYx15Z_.js";import"./remote-CNywZcFz.js";import"./useLocalizedStringFormatter-DOOHcy82.js";import"./context-CpUEkiXT.js";import"./utils-CwSfACxU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DGTwh-gS.js";import"./usePress-D-cWxohr.js";import"./useFocusRing-2ds-u5nI.js";import"./useFocusable-DfxkJnS0.js";import"./dynamic-CgrPgLPo.js";import"./LoadingSpinner-CziFUZ0y.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DMDpRFJa.js";import"./ProgressBar-BRc7Paog.js";import"./Label-z3gRbOqe.js";import"./Hidden-Ct3-vkmZ.js";import"./useLabel-BhJmZsby.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BO2LE4a1.js";import"./EmulatedBoldText-DOwlcjUH.js";import"./Text-CRfwxtsq.js";import"./AlertIcon-CDhVv57V.js";import"./ActionBatch-CjHdyiP4.js";import"./useOverlayController-BSdz9lOP.js";import"./useStatic-CSSB8BCl.js";import"./getActionGroupSlot-Bk49RJtR.js";import"./Popover-DTr9x_xz.js";import"./OverlayContextProvider-DDpjWSCr.js";import"./Dialog-DOWWi4PD.js";import"./RSPContexts-BN50OY8k.js";import"./OverlayArrow-DLVTOKg_.js";import"./useControlledState-CcdBsJdv.js";import"./Collection-My4n8esd.js";import"./CollectionBuilder-BRfzWkKh.js";import"./SelectionIndicator-oJF9tjaE.js";import"./Separator-DziD0EOf.js";import"./SelectionManager-Xen2pH3E.js";import"./useEvent-CIGBudko.js";import"./useCollator-D1MkjfpC.js";import"./FocusScope-BGzNCZ_B.js";import"./VisuallyHidden--ZEPdGNY.js";import"./Switch-DJN0Bie_.js";import"./useFieldComponent-BRiGBo1N.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BfrmtsVT.js";import"./useFormReset-DovDq4jf.js";import"./OverlayTrigger-CQGtynqr.js";import"./DialogTriggerView-owN25DMO.js";import"./Overlay-Cr8QYrRm.js";import"./ButtonView-DnjtrRMk.js";import"./Flex-727o-fn3.js";import"./Heading-CJu_lfUD.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
