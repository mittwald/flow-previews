import{j as r}from"./iframe-K4Kgzs5d.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BGpHZy47.js";import{L as m}from"./Link-D8nPfavX.js";import{H as s}from"./HeaderNavigation-D0v0cUW_.js";import{B as o}from"./Button-CLdF1xvY.js";import{T as p}from"./Text-BPEkrilU.js";import{I as h}from"./Image-DsIbxh8T.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CSU8qQ26.js";import{C as M,M as c}from"./MenuItem-muIDpS2g.js";import{C as I}from"./ContextMenuTrigger-l4j2BFdl.js";import"./ContextMenuSection-BbQjr4t3.js";import{a as T,M as k}from"./Modal-DO7jqF3A.js";import{H}from"./Heading-DvNGAwaU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./index-C1Cqv2DY.js";import"./remote-DgH_DZKx.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./context-BHsz5d3m.js";import"./utils--XC5cWbY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CfhKlOoP.js";import"./usePress-Bsv_-vru.js";import"./useFocusRing-B7VfbIok.js";import"./useFocusable-H6UpmrOx.js";import"./dynamic-d4gvBHma.js";import"./LoadingSpinner-Dt3AVNp7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B9p48ORM.js";import"./ProgressBar-DgQG6kyC.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./useLabel-IleSnN60.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-9MG5lDdh.js";import"./EmulatedBoldText-CJYMqRLn.js";import"./Text-DhK76AHe.js";import"./AlertIcon-Bh0Qf_48.js";import"./Action-D8xdI4CM.js";import"./context-Be9deJEN.js";import"./useStatic-DUE7vdEn.js";import"./getActionGroupSlot-DDRLr0XQ.js";import"./Popover-B6jJOXre.js";import"./useOverlayController-lRtmjR_K.js";import"./OverlayContextProvider-BLXdSW9X.js";import"./Dialog-D9y6Gm5p.js";import"./RSPContexts-DBQcbxf9.js";import"./OverlayArrow-70hjzCbF.js";import"./useControlledState-UcCiEhN3.js";import"./Collection-BbxJvL2P.js";import"./CollectionBuilder-GLV80gvr.js";import"./SelectionIndicator-LfvmrL3H.js";import"./Separator-D8C38sqW.js";import"./SelectionManager-D3da5ydz.js";import"./useEvent-B-sfhBuw.js";import"./useCollator-Cz2Nd5FQ.js";import"./FocusScope-A43bauPW.js";import"./VisuallyHidden-DOfAC-AS.js";import"./Switch-BstPq9tg.js";import"./useFieldComponent-XDoLqUAT.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BmAlosTU.js";import"./useFormReset-Bu0cPn5B.js";import"./OverlayTrigger-B8uZhBMV.js";import"./DialogTriggerView-Bj6KaMuw.js";import"./Overlay-DPoZZ9io.js";import"./ButtonView-CZyRcM7x.js";import"./Flex-DZ3ajP4r.js";import"./Heading-BKtqva_S.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
