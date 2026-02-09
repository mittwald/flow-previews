import{j as r}from"./iframe-DQCyQvTg.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BsBEN2i7.js";import{L as m}from"./Link-p8kO255Q.js";import{H as s}from"./HeaderNavigation-DwD0iTer.js";import{B as o}from"./Button-BuvZu5FH.js";import{T as p}from"./Text-Dy3rf6Sf.js";import{I as h}from"./Image-Dgv7j6eX.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BIAW3N1Z.js";import{C as M,M as c}from"./MenuItem-E7Q-OePx.js";import{C as I}from"./ContextMenuTrigger-CJr1EBXJ.js";import"./ContextMenuSection-CRl2t-Sj.js";import{a as T,M as k}from"./Modal-CxlPENqe.js";import{H}from"./Heading-BJYyanRr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./index-vqo-_XTj.js";import"./remote-DwYKdEj8.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./context-BVR1xsiE.js";import"./utils-B-47qEzM.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-MHK9Bgmz.js";import"./usePress-BDNCZxcv.js";import"./useFocusRing-H28TAT4s.js";import"./useFocusable-Bi17AcBv.js";import"./dynamic-CLdLSboA.js";import"./LoadingSpinner-C2L8sUPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BqVXXUXM.js";import"./ProgressBar-CvxDZlN2.js";import"./Label-CVwZ8mvh.js";import"./Hidden-B1onkdes.js";import"./useLabel-CgNKGrTG.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-NLzega1a.js";import"./EmulatedBoldText-BkRIKdgp.js";import"./Text-dCr4PfuU.js";import"./AlertIcon-BB94ofCu.js";import"./Action-BFqm9nZf.js";import"./context-CMTFLv9Z.js";import"./useStatic-XhnoWRRg.js";import"./getActionGroupSlot--rri3fdD.js";import"./Popover-lpt7nTNE.js";import"./useOverlayController-DoCudRwR.js";import"./OverlayContextProvider-CVH0IpO2.js";import"./Dialog-l1ZI7Q43.js";import"./RSPContexts-CbSXEXlJ.js";import"./OverlayArrow-BRUQmdEx.js";import"./useControlledState-CSGe32xq.js";import"./Collection-Dvx0GJ5C.js";import"./CollectionBuilder-G7sQB9cg.js";import"./SelectionIndicator-BqvLdNe9.js";import"./Separator-CkdPEWsl.js";import"./SelectionManager-C7NRhxAL.js";import"./useEvent-BSjlxpLx.js";import"./useCollator-Dr7oYRVM.js";import"./FocusScope-DgjO-P_8.js";import"./VisuallyHidden-DTZCmZoD.js";import"./Switch-BJRzuZmY.js";import"./useFieldComponent-BQB8jFXR.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Driw9LeX.js";import"./useFormReset-3qpl4kR-.js";import"./OverlayTrigger-nB7PjmO3.js";import"./DialogTriggerView-TXGaBqE2.js";import"./Overlay-CPML_DE3.js";import"./ButtonView-DfoPfFoM.js";import"./Flex-DhhHe1aF.js";import"./Heading-CbA3ZoPp.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
