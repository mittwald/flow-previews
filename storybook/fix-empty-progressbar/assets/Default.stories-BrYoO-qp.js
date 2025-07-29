import{j as r}from"./iframe-Drlrrc6u.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-DFClu02m.js";import{L as m}from"./Link-Du07zNPB.js";import{H as s}from"./HeaderNavigation-B2-f5j7W.js";import{B as o}from"./Button-BZh4lcUb.js";import{T as p}from"./Text-BpnYQtuA.js";import{I as C}from"./Image-B0IvuGVn.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-ZfRvJ-L4.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DKaMIjnZ.js";import"./ContextMenuSection-DPOvrehY.js";import{a as D,M as G}from"./Modal-ALwipgaf.js";import{H as E}from"./Heading-BNUsyeWI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-7APwv9TL.js";import"./mergeRefs-z-jxhhpD.js";import"./index-Cm4rxf6Y.js";import"./useLocalizedStringFormatter-BDZHKril.js";import"./context-DT5m7DRa.js";import"./utils-44JLHIVv.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Dk26gxo5.js";import"./useFocus-CnY09QFt.js";import"./useFocusRing-CzFnztZj.js";import"./useFocusable-DohvcnRv.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Btgpjn0K.js";import"./Button-BmpQ_XRw.js";import"./ProgressBar-BADn2VXC.js";import"./Label-DVK5kxKu.js";import"./Hidden-DD5LsL7x.js";import"./useLabel-BHWpzQCP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BFksgo5g.js";import"./EmulatedBoldText-Wx7CRY9w.js";import"./Text-CC4u2Qzg.js";import"./AlertIcon-DncCKYQE.js";import"./Action-C167ofiw.js";import"./context-B6ETq0Vi.js";import"./useStatic-CAY7QlrT.js";import"./getActionGroupSlot-DLBNnVP5.js";import"./Popover-PSW42Ml5.js";import"./DialogTriggerView-CkmkgVup.js";import"./Dialog-D4Yh2V4Y.js";import"./RSPContexts-BD-SnrRU.js";import"./OverlayArrow-CassYJzw.js";import"./useControlledState-CdXpD3vz.js";import"./Collection-DU8MwyJ0.js";import"./CollectionBuilder-DAHNGdP0.js";import"./Separator-DU5iT2Hb.js";import"./Group-gluLjbwr.js";import"./SearchField-Do9rWkb6.js";import"./FieldError-C-dEABlD.js";import"./Form-C4Z2UYxX.js";import"./useTextField-CgGM2M3-.js";import"./useFormReset-DMyooaze.js";import"./TextField-5_ge-qCO.js";import"./useEvent-CTzW67zj.js";import"./SelectionManager-DSfIplwJ.js";import"./useCollator-DFRy-0H3.js";import"./FocusScope-Bhoog2Cx.js";import"./VisuallyHidden-CSm48NDs.js";import"./Switch-CLY-UBKF.js";import"./Label-B_vkKa-h.js";import"./useToggleState-DduW_QIn.js";import"./Overlay-BNEFDCT1.js";import"./Header-DIuZA15k.js";import"./ButtonView-BJQQ2_2L.js";import"./Heading-DHv6Y5yQ.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
