import{j as r}from"./iframe-xv1hkYrp.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-0FGrLhxS.js";import{L as m}from"./Link-D5sjLXJG.js";import{H as s}from"./HeaderNavigation-CDkhZHnP.js";import{B as o}from"./Button-CxiqmFwG.js";import{T as p}from"./Text-DbY3Cuep.js";import{I as C}from"./Image-Iixx_SHS.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-v7uC_S22.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CN69jKMw.js";import"./ContextMenuSection-fN3hiiSx.js";import{a as D,M as E}from"./Modal-BEyrcI89.js";import{H as G}from"./Heading-BBAjkchM.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B9OcsNR0.js";import"./mergeRefs-BFH3kKHm.js";import"./index-Dm2Ajy-S.js";import"./useLocalizedStringFormatter-UiX65Yuj.js";import"./context-D4r7bTNU.js";import"./utils-CpTHh5rs.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-o1s-vRpH.js";import"./useFocus-CfLpRQBT.js";import"./useFocusRing-CU0aNGGs.js";import"./useFocusable-CwWDG3DW.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-DFWWTIAT.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BusXuZI0.js";import"./ProgressBar-DjfrTOAa.js";import"./Label-mG8fBsu4.js";import"./Hidden-BDDDKiVs.js";import"./useLabel-BR4zi6f8.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-lwEiR5fW.js";import"./EmulatedBoldText-CmD3aEdd.js";import"./Text-B_3Y_Nze.js";import"./AlertIcon-Bvqbsxj6.js";import"./Action-DwAWbs1F.js";import"./context-DBtsHmqs.js";import"./useStatic-Cda7hAFV.js";import"./getActionGroupSlot-hBdF3hkn.js";import"./Popover-CkIiCyP4.js";import"./DialogTriggerView-a7wYn1Yu.js";import"./Dialog-Xvd99Udq.js";import"./RSPContexts-DH2vWQTy.js";import"./OverlayArrow-CUApfZDY.js";import"./useControlledState-BbRhH2Ee.js";import"./Collection-DSqVCN8E.js";import"./CollectionBuilder-Dvvc79MD.js";import"./Separator-qRXs74hc.js";import"./Group-B3GwFloQ.js";import"./SearchField-BwU0-hd2.js";import"./FieldError-wrM_YjD9.js";import"./Form-B-L3i4zG.js";import"./useTextField-CIdmu9LD.js";import"./useFormReset-B-Mz2laO.js";import"./TextField-D3hWr_Bw.js";import"./useEvent-CaWXSKpr.js";import"./SelectionManager-DH9lj--q.js";import"./useCollator-IG_dykuZ.js";import"./FocusScope-BxH26lbn.js";import"./VisuallyHidden-CfqgoXLS.js";import"./Switch-CTWdZZ5K.js";import"./Label-DC7JJJSp.js";import"./useToggleState-DkHx4t_U.js";import"./Overlay-C_K4jtnP.js";import"./ButtonView-DgAkmcrb.js";import"./Heading-uqNmfPuD.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
