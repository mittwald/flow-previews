import{j as r}from"./iframe-Bju5tM19.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-EseH3oBy.js";import{L as m}from"./Link-CwjgeQHd.js";import{H as s}from"./HeaderNavigation-Dee6Un2-.js";import{B as o}from"./Button-D01G-2Tc.js";import{T as p}from"./Text-Ctwf1INQ.js";import{I as h}from"./Image-B1XuUmgH.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Clx5aRoZ.js";import{C as M,M as c}from"./MenuItem-DdbpsmhR.js";import{C as I}from"./ContextMenuTrigger-BxPvVFyX.js";import"./ContextMenuSection-D4oqZzWw.js";import{a as T,M as k}from"./Modal-B1GtI-kN.js";import{H}from"./Heading-BvGOAURU.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DMQ923EN.js";import"./index-i9t6c7d2.js";import"./index-v7jxlCcy.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./context-BCZfssJF.js";import"./utils-CHaPYnRu.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DNUm2pP-.js";import"./useFocus-dnpNkUeL.js";import"./useFocusRing-DQLm4Rj_.js";import"./useFocusable-S-EY4exA.js";import"./dynamic-KamcoLNc.js";import"./LoadingSpinner-OWtFn1Ti.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dw5yhw5U.js";import"./ProgressBar-Bd2c_dqs.js";import"./Label-C0LDEu9P.js";import"./Hidden-B3KlSyIs.js";import"./useLabel-DxvdaVYE.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-5LoYBPX6.js";import"./EmulatedBoldText-DNLnXqQA.js";import"./Text-X0smrbMM.js";import"./AlertIcon-ngpN1HUE.js";import"./Action-DGXz3yuy.js";import"./context-DoYyNt70.js";import"./useStatic-Dhn4vIeo.js";import"./getActionGroupSlot-BFuFDZVU.js";import"./Popover-DlqNLSeP.js";import"./useOverlayController-rptj0Un2.js";import"./OverlayContextProvider-BSx-P-EI.js";import"./Dialog-BwAIy3cs.js";import"./RSPContexts-CuZAMKB6.js";import"./OverlayArrow-CkGx3q47.js";import"./useControlledState-BiPn7KDX.js";import"./Collection-CzETdAyj.js";import"./CollectionBuilder-C9Q_qjob.js";import"./SelectionIndicator-BWLjQ8Kg.js";import"./Separator-F1osFFu3.js";import"./SelectionManager-BWZTcbb9.js";import"./useEvent-B0Z9j7Hl.js";import"./useCollator-CPsP6oXT.js";import"./FocusScope-BvTlMNTx.js";import"./VisuallyHidden-muGwU-w1.js";import"./ClearPropsContextView-D7P4GTdz.js";import"./ClearPropsContext-nVrOsFhk.js";import"./Switch-Dms2v34i.js";import"./useFieldComponent-SvMgnfSt.js";import"./react-children-utilities-CV_3FZ2O.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-BXmgj38r.js";import"./useToggleState-DWNyo-rl.js";import"./useFormReset-CYS5QNbo.js";import"./OverlayTrigger-845SWzvQ.js";import"./ControlledNotification-CjAjijX6.js";import"./DialogTriggerView-6-499Y0k.js";import"./Overlay-CDc_f59e.js";import"./ButtonView-BVhlDYAR.js";import"./Heading-BJwwNeLw.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
