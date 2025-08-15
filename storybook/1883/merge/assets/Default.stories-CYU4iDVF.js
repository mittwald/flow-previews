import{j as r}from"./iframe-DRWwRHPb.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-DhSonKOB.js";import{L as m}from"./Link-qJQRVLBS.js";import{H as s}from"./HeaderNavigation-DBdxRMNK.js";import{B as o}from"./Button-C17kQQYD.js";import{T as p}from"./Text-BIokAaTQ.js";import{I as C}from"./Image-BEllHXIA.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-aACVIuTC.js";import{a as y,C as A,M as c}from"./ContextMenuContent-hLSBaPFg.js";import"./ContextMenuSection-YVOsEwEr.js";import{a as D,M as G}from"./Modal-Axtc3TOd.js";import{H as E}from"./Heading-l2lCrlvX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BCWzTzuw.js";import"./mergeRefs-B0ExOAJ1.js";import"./index-DvYl_DKa.js";import"./useLocalizedStringFormatter-CU66bFG-.js";import"./context-jL0Ioa3t.js";import"./utils-9ciE-ZWz.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DZFGRV58.js";import"./useFocus-Cklz1p5-.js";import"./useFocusRing-DwMv-ywr.js";import"./useFocusable-CTYzjUzk.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-B_6uztW9.js";import"./Button-BJEoKlME.js";import"./ProgressBar-lrbeVblJ.js";import"./Label-DWKl8ZCI.js";import"./Hidden-CgY-Zzb9.js";import"./useLabel-C1sZK0NB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-ChcUEk5m.js";import"./EmulatedBoldText-w_oHSgVv.js";import"./Text-XTosNzcc.js";import"./AlertIcon-CLqrkwXR.js";import"./Action-Bq2hQ8Bh.js";import"./context-GwQ3zI17.js";import"./useStatic-u3WHDxzv.js";import"./getActionGroupSlot-C6b8pLJW.js";import"./Popover-X0_ZzSYu.js";import"./DialogTriggerView-C6nRRnSY.js";import"./Dialog-ImkhFy9O.js";import"./RSPContexts-BIfyYgqP.js";import"./OverlayArrow-CjAgqYv2.js";import"./useControlledState-BmVuB4nj.js";import"./Collection-LSZw9Opa.js";import"./CollectionBuilder-DMMzaxy1.js";import"./Separator-Cq-Q8G1M.js";import"./Group-DyuuzcKr.js";import"./SearchField-9TpmVPLK.js";import"./FieldError-sbX835HY.js";import"./Form-C-fYDZS9.js";import"./useTextField-C4Pn4RsW.js";import"./useFormReset-XyyE6UJM.js";import"./TextField-BHCgELYj.js";import"./useEvent-D_icz2Dp.js";import"./SelectionManager-w9v-Ws39.js";import"./useCollator-CaT5c7qP.js";import"./FocusScope-hUGkKLjX.js";import"./VisuallyHidden-CJKgqKOh.js";import"./Switch-BNwTLHSR.js";import"./Label-DMZs6_dS.js";import"./useToggleState-BKsOY-9a.js";import"./Overlay-CfBZeVYs.js";import"./ButtonView-B4GC_kXE.js";import"./Heading-Bw-EY3jL.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Vr as default};
