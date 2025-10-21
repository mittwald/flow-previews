import{j as r}from"./iframe-DOYRhvKw.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-CT2mn3WV.js";import{L as m}from"./Link-Bo-kO0xT.js";import{H as s}from"./HeaderNavigation-D7JT0_xO.js";import{B as o}from"./Button-C2r2j3I4.js";import{T as p}from"./Text-uG3ng9U4.js";import{I as h}from"./Image-7gJo2BMD.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CsbKegzD.js";import{C as M,M as c}from"./MenuItem-DDTAF7Kq.js";import{C as I}from"./ContextMenuTrigger-D33vVhEQ.js";import"./ContextMenuSection-C5Ehy01g.js";import{a as T,M as k}from"./Modal-FqDtQPdb.js";import{H}from"./Heading-BcQRRFfC.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-STxdqvts.js";import"./index-CBooujIz.js";import"./index-CsHgCCkK.js";import"./useLocalizedStringFormatter-DmT4fRR_.js";import"./context-NzKNm45Y.js";import"./utils-Bgpcx055.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-GLnS58A3.js";import"./useFocus-19H2kxNT.js";import"./useFocusRing-BgXDKXFW.js";import"./useFocusable-DT2cLKuD.js";import"./dynamic-nHNYFzn9.js";import"./LoadingSpinner-x8jgjTbZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DqQnue56.js";import"./ProgressBar-DECQ-pQm.js";import"./Label-DPl4piTh.js";import"./Hidden-vFw0yyvc.js";import"./useLabel-CzwTtnKl.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BfmJHaZX.js";import"./EmulatedBoldText-wbMAxmw1.js";import"./Text-ChShlFeN.js";import"./AlertIcon-C5nLIKA2.js";import"./Action-BNkegqWa.js";import"./context-CjasfPnd.js";import"./useStatic-kDWe5hml.js";import"./getActionGroupSlot-DkFy2TVv.js";import"./Popover-C_Lqylf0.js";import"./useOverlayController-7tlEbJro.js";import"./OverlayContextProvider-_T8uFS1c.js";import"./Dialog-QPXJS7lu.js";import"./RSPContexts-D64TVg0j.js";import"./OverlayArrow-C0WVRV0f.js";import"./useControlledState-BpyUCkTO.js";import"./Collection-BmR1fMr0.js";import"./CollectionBuilder-COEzD4ng.js";import"./SelectionIndicator-DAPFHJnO.js";import"./Separator-9JM_OpZ0.js";import"./SelectionManager-BtUAX0vR.js";import"./useEvent-Tq7AIfXA.js";import"./useCollator-Dm4rB5GB.js";import"./FocusScope-CgTCZfj1.js";import"./VisuallyHidden-DLTCEUwm.js";import"./ClearPropsContextView-HZAP9uO_.js";import"./ClearPropsContext-BqcXprie.js";import"./Switch-hiQ_yMlz.js";import"./useFieldComponent-CVvykpK2.js";import"./react-children-utilities-BC28ceB8.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-CpkCTOPe.js";import"./useToggleState-jAQ1ekgn.js";import"./useFormReset-BHPIYNcK.js";import"./OverlayTrigger-BlX_Ocgn.js";import"./ControlledNotification-DTnIJfc-.js";import"./DialogTriggerView-DchH2u7O.js";import"./Overlay-DlFtVyJh.js";import"./ButtonView-CWyXffOK.js";import"./Heading-BiqQ-WE6.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
