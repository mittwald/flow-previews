import{j as r}from"./iframe-DxsUlawc.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-CxX_lufW.js";import{L as m}from"./Link-CztFBomh.js";import{H as s}from"./HeaderNavigation-BSv42cMK.js";import{B as o}from"./Button-IG1UbGgX.js";import{T as p}from"./Text-BghZAovJ.js";import{I as C}from"./Image-pPjKwCaK.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Dd4LRr32.js";import{a as y,C as A,M as c}from"./ContextMenuContent-B-uDmENd.js";import"./ContextMenuSection-G4FkDWGU.js";import{a as D,M as E}from"./Modal-03yY1TSU.js";import{H as G}from"./Heading-BOztv1gg.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xQDv9zm6.js";import"./mergeRefs-CIUzaBPj.js";import"./index-CXZ1ulCu.js";import"./useLocalizedStringFormatter-B7ecu7MW.js";import"./context-Pme8S34O.js";import"./utils-anS-nfaS.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CuZIkaGu.js";import"./useFocus-19elgRbR.js";import"./useFocusRing-NqyRw62N.js";import"./useFocusable-Dsjl8uYb.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-B_W_hnSA.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D6Z7YYpb.js";import"./ProgressBar-litaDe0V.js";import"./Label-DR2p3ljL.js";import"./Hidden-DmCEYrWx.js";import"./useLabel-CBxP0DvO.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-GG2yXHGk.js";import"./EmulatedBoldText-HMke4BSZ.js";import"./Text-w8QkFxXB.js";import"./AlertIcon-8o1e_Dxx.js";import"./Action-Bm6Z0jHH.js";import"./context-D1Ianu5s.js";import"./useStatic-DTmVdxCi.js";import"./getActionGroupSlot-DSGD8tPp.js";import"./Popover-BzQAY9NU.js";import"./DialogTriggerView-BqpM7c71.js";import"./Dialog-BhiDy3Uj.js";import"./RSPContexts-D24GGWc4.js";import"./OverlayArrow-Cqrl2gO5.js";import"./useControlledState-BiaHUtte.js";import"./Collection-2mgYJ3lC.js";import"./CollectionBuilder-DUz18fnw.js";import"./Separator-MdtjVr6X.js";import"./Group-BM4Odlhy.js";import"./SearchField-CP40iq6L.js";import"./FieldError-BogjW8MC.js";import"./Form-DGyQGQrN.js";import"./useTextField-C34ms4nI.js";import"./useFormReset-C5585XYI.js";import"./TextField-BV-7_CBI.js";import"./useEvent-CBeKZXam.js";import"./SelectionManager-zRsSiPpC.js";import"./useCollator-DS1CRBkN.js";import"./FocusScope-_FVys5dN.js";import"./VisuallyHidden-DjzEMrNo.js";import"./Switch-BDovvq2k.js";import"./Label-B7Tx4Pgn.js";import"./useToggleState-D8_HqcG5.js";import"./Overlay-DETyEQ1C.js";import"./ButtonView-CD8jObmh.js";import"./Heading-CLK_5_44.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
