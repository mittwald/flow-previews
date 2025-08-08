import{j as r}from"./iframe-BTcUxdaq.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-DQhgAuti.js";import{L as m}from"./Link-BFwgH6Cm.js";import{H as s}from"./HeaderNavigation-B2V5-xQn.js";import{B as o}from"./Button-SMMW9b8C.js";import{T as p}from"./Text-Cyud7aU0.js";import{I as C}from"./Image-B5JlVJeh.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Cdz-Wy1H.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BED3D4Im.js";import"./ContextMenuSection-c8LljZuw.js";import{a as D,M as G}from"./Modal-COAjTx3q.js";import{H as E}from"./Heading-DyYm4rdv.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BPMxDVmu.js";import"./mergeRefs-Cmhxncmf.js";import"./index-BEbRwPxl.js";import"./useLocalizedStringFormatter-CloaMtl1.js";import"./context-DPBkKLSs.js";import"./utils-QQf7G53U.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CFIgJOpO.js";import"./useFocus-BGyfOFlp.js";import"./useFocusRing-C1MTD0-W.js";import"./useFocusable-BavwL0Gh.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-DQ2VKIPI.js";import"./Button-R5yzYc06.js";import"./ProgressBar-DujcM5UT.js";import"./Label-N2lNAPH4.js";import"./Hidden-C0wGKKFL.js";import"./useLabel-COrOgVB9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B8OJoPhG.js";import"./EmulatedBoldText-CDVaFR1M.js";import"./Text-DQ5f9mUM.js";import"./AlertIcon-DqGtaRQX.js";import"./Action-BD0CTwd4.js";import"./context-BOTu0wPK.js";import"./useStatic-D47W8BT_.js";import"./getActionGroupSlot-CRqbjcra.js";import"./Popover-cq_CoGS1.js";import"./DialogTriggerView-vV1bA8CD.js";import"./Dialog-Cp_7H9MS.js";import"./RSPContexts-BdDzjtbv.js";import"./OverlayArrow-BOe63Seg.js";import"./useControlledState-UFVvdmji.js";import"./Collection-CCOeQAim.js";import"./CollectionBuilder-BMhklLUE.js";import"./Separator-jw0blZZr.js";import"./Group-Bij86ZzX.js";import"./SearchField-BjsA91o0.js";import"./FieldError-CZwoNVbm.js";import"./Form-BWd8hqS-.js";import"./useTextField-BAW13dg9.js";import"./useFormReset-WxrNhhec.js";import"./TextField-BAMKAOQn.js";import"./useEvent-CkvJPork.js";import"./SelectionManager-aQw9Fg0e.js";import"./useCollator-BEdiRQuO.js";import"./FocusScope-_yP39RaH.js";import"./VisuallyHidden-17OXXq4D.js";import"./Switch-DTx9cjZv.js";import"./Label-Bgrifxv0.js";import"./useToggleState-C3oSUZJW.js";import"./Overlay-_jY1Wy0L.js";import"./Header-Rpm80eku.js";import"./ButtonView-DVLx5J0B.js";import"./Heading-BleUsbwQ.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
