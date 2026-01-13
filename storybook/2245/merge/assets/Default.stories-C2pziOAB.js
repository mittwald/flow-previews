import{j as r}from"./iframe-YnzBkBP1.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-CfrgrK5w.js";import{L as m}from"./Link-DQ0PSomW.js";import{H as s}from"./HeaderNavigation-BjY3000_.js";import{B as o}from"./Button-BvFsSv02.js";import{T as p}from"./Text-CErt044E.js";import{I as h}from"./Image-A2iC_LjC.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-iwY6Vaoc.js";import{C as M,M as c}from"./ContextMenu-B2Kv-ADC.js";import{C as I}from"./ContextMenuTrigger-a2bNZsOh.js";import"./ContextMenuSection-Bzcd8RVm.js";import{a as T,M as k}from"./Modal--Kxsvm7X.js";import{H}from"./Heading-BiUnALLM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxoafP0O.js";import"./index-CbL05fU3.js";import"./index-C9L7IfWC.js";import"./remote-psJ_k7Km.js";import"./useLocalizedStringFormatter-6QnOnkyA.js";import"./context-Dc351FW_.js";import"./utils-CRkRQkMM.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-NgaP4MvP.js";import"./useFocus-CEJfh5Ox.js";import"./useFocusRing-B9e_t0Os.js";import"./useFocusable-BIzKoTBr.js";import"./dynamic-DAiG6Vmq.js";import"./LoadingSpinner-z9BQWCCX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DfMPCk5A.js";import"./ProgressBar-139JbARe.js";import"./Label-TsHYY7iw.js";import"./Hidden-Dq31wpMg.js";import"./useLabel-DyCvkQuz.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Sf85iaAd.js";import"./EmulatedBoldText-Dl4jMQ55.js";import"./Text-C_7kOqPJ.js";import"./AlertIcon-DE5OYWVT.js";import"./Switch-WPEHj1yJ.js";import"./useFieldComponent-BnDxVRXr.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-yPblB1_u.js";import"./useFormReset-3oD77Uyk.js";import"./useControlledState-DwL8StHF.js";import"./VisuallyHidden-BsENeWhO.js";import"./Dialog-971pU4tV.js";import"./RSPContexts-Mp6syAgQ.js";import"./OverlayArrow--71CUfvh.js";import"./Collection-FfZcU2DX.js";import"./CollectionBuilder-DNUE6McV.js";import"./SelectionIndicator-DnZvOIyV.js";import"./Separator-h_x_t96Z.js";import"./SelectionManager-rmSH4beD.js";import"./useEvent-CmRPI6I-.js";import"./useCollator-BTyxNuGL.js";import"./FocusScope-D2Uy30lG.js";import"./Action-DDQNlr1F.js";import"./context-CGFBFC28.js";import"./useStatic-9o3ywd_N.js";import"./getActionGroupSlot-BNJAUwyr.js";import"./Popover-BfimHfgr.js";import"./useOverlayController-BBC78SET.js";import"./OverlayContextProvider-JV42Gzf_.js";import"./OverlayTrigger-B11Ab0Yr.js";import"./DialogTriggerView-Di8ud54V.js";import"./Overlay-BEBtPs6q.js";import"./ButtonView-C86qpyt3.js";import"./Flex-BOsL6vV8.js";import"./Heading-ChrBU0Of.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
