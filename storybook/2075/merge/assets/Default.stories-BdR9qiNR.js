import{j as r}from"./iframe-QQgxjfU-.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-CSQYjrC1.js";import{L as m}from"./Link-B57fKZbB.js";import{H as s}from"./HeaderNavigation-uFoH2W7p.js";import{B as o}from"./Button-BWu_s2A1.js";import{T as p}from"./Text-CRs-OO-e.js";import{I as h}from"./Image-aMm-Eabq.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DqeRZ3SN.js";import{C as M,M as c}from"./MenuItem-BYgn9L54.js";import{C as I}from"./ContextMenuTrigger-PKqcZi61.js";import"./ContextMenuSection-BZb_tlaR.js";import{a as T,M as k}from"./Modal-BM7eE6SR.js";import{H}from"./Heading-BhecTOma.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent--EocvfBi.js";import"./index-BLcKU5Vx.js";import"./index-3NdHptBj.js";import"./useLocalizedStringFormatter-B91t6rxR.js";import"./context-CRx6Bs8B.js";import"./utils-DhA81qjX.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BIrX7kgo.js";import"./useFocus-0cMRA2DE.js";import"./useFocusRing-UOKs1Fh8.js";import"./useFocusable-ClkP-4lm.js";import"./dynamic-BjF6TIyL.js";import"./LoadingSpinner-DsHmX75T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D9YKuqRT.js";import"./ProgressBar-DarvvV7I.js";import"./Label-0zOMPJ7B.js";import"./Hidden-4F2-2j_N.js";import"./useLabel-BVJbXyTi.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CvCNE6Dh.js";import"./EmulatedBoldText-DL56_OWd.js";import"./Text-D_WC5Uss.js";import"./AlertIcon-Dt_kIrwl.js";import"./Action-DetrUASE.js";import"./context-C73KBwIX.js";import"./useStatic-B5jRDwsJ.js";import"./getActionGroupSlot-AfJwTJD5.js";import"./Popover-6OcPTHJw.js";import"./useOverlayController-nxYv6OIh.js";import"./OverlayContextProvider-DVG4wpYy.js";import"./Dialog-D5kgP22k.js";import"./RSPContexts-CsH1Ib1c.js";import"./OverlayArrow-8rZ2ifiK.js";import"./useControlledState-CkoNAxF1.js";import"./Collection-BHgWnzFo.js";import"./CollectionBuilder-8HmDsnbK.js";import"./SelectionIndicator-KO2l2gWQ.js";import"./Separator-BjOsH73i.js";import"./SelectionManager-okGnjmMp.js";import"./useEvent-ChbsxOK6.js";import"./useCollator-Dex40a3g.js";import"./FocusScope-Bg9evWjP.js";import"./VisuallyHidden-B95C2FUL.js";import"./ClearPropsContextView-DUKOvykV.js";import"./ClearPropsContext-C1xOcMSE.js";import"./Switch-BOSrZvlT.js";import"./useFieldComponent-B5mMljfV.js";import"./react-children-utilities-2-HBtGkG.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-DfOzNy-a.js";import"./useToggleState-waVL2aEM.js";import"./useFormReset-C3QpCCH-.js";import"./OverlayTrigger-Kv_JLhIy.js";import"./ControlledNotification-BZ0xiENt.js";import"./DialogTriggerView-BPTa0vHW.js";import"./Overlay-Dw7s34WA.js";import"./ButtonView-DdE2NGK2.js";import"./Heading-SF4sVKWG.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
