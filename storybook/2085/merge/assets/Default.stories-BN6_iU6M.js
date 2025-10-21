import{j as r}from"./iframe-CCgutS5t.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-BIjPfZ_7.js";import{L as m}from"./Link-DtylWjAm.js";import{H as s}from"./HeaderNavigation-BN7EClBO.js";import{B as o}from"./Button-CB_SQlxf.js";import{T as p}from"./Text-C-3mWHEt.js";import{I as h}from"./Image-CBBJ3z9K.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-KnrZfZtG.js";import{C as M,M as c}from"./MenuItem-DHQNvFuy.js";import{C as I}from"./ContextMenuTrigger-BvhIW5tE.js";import"./ContextMenuSection-plAoKvaj.js";import{a as T,M as k}from"./Modal-CaP1zKvy.js";import{H}from"./Heading-C0cuqA4W.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C78Jb5L6.js";import"./index-h_ilVZmN.js";import"./index-Bp2d_id4.js";import"./useLocalizedStringFormatter-BjHcrzpH.js";import"./context-3TjxBBiZ.js";import"./utils-N6USVjPQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-C_WBS1_H.js";import"./useFocus-qWLnYmls.js";import"./useFocusRing-DetKeZ0w.js";import"./useFocusable-C1wexJX5.js";import"./dynamic-CnlMxg6J.js";import"./LoadingSpinner-CbAXLLLD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DxAPDldv.js";import"./ProgressBar-Pqb-SOG6.js";import"./Label-B2_Qc07C.js";import"./Hidden-BtuehT5t.js";import"./useLabel-C2LzTSEt.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Cx9TdPw4.js";import"./EmulatedBoldText-BfzgnQm3.js";import"./Text-DSftVrdI.js";import"./AlertIcon-CYfE7Ku-.js";import"./Action-BELw5_ca.js";import"./context-_S3VUPKr.js";import"./useStatic-MsaSckAb.js";import"./getActionGroupSlot-DHM8pkUy.js";import"./Popover-CYSy3wGz.js";import"./useOverlayController-DW7fwhRo.js";import"./OverlayContextProvider-zefoD_gg.js";import"./Dialog-BFfcJUiM.js";import"./RSPContexts-D8ixlOLf.js";import"./OverlayArrow-D_Aj7zmL.js";import"./useControlledState-C-pLTCEb.js";import"./Collection-DHibalOY.js";import"./CollectionBuilder-BmvqiF6i.js";import"./SelectionIndicator-BSAaVuJo.js";import"./Separator-CdSBB1Je.js";import"./SelectionManager-CyYCav6z.js";import"./useEvent-rTmmTfmz.js";import"./useCollator-Cks0Ndw_.js";import"./FocusScope-1cqgO8JZ.js";import"./VisuallyHidden-upAad0zi.js";import"./ClearPropsContextView-CYIHyMV-.js";import"./ClearPropsContext-CZ_w58Ag.js";import"./Switch-CyvirvE8.js";import"./useFieldComponent-B36i382k.js";import"./react-children-utilities-DK8cwA_F.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-Cb2U_kBy.js";import"./useToggleState-Car6UhCZ.js";import"./useFormReset-C2ixUAq4.js";import"./OverlayTrigger-2i5uyzps.js";import"./ControlledNotification-C8Yc-FwQ.js";import"./DialogTriggerView-BF7YMpO5.js";import"./Overlay-AZtEhM8_.js";import"./ButtonView-CFTZzpfx.js";import"./Heading--qvH0N7j.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
